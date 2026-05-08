#include "Library.h"
#include "EBook.h"
#include "PrintedBook.h"
#include <iostream>
#include <limits>

// Prints the main menu options to the console
void displayMenu() {
    std::cout << "\n========================================" << std::endl;
    std::cout << "   Library Management System" << std::endl;
    std::cout << "========================================" << std::endl;
    std::cout << "  1. Display All Books" << std::endl;
    std::cout << "  2. Display All Patrons" << std::endl;
    std::cout << "  3. Check Out a Book" << std::endl;
    std::cout << "  4. Return a Book" << std::endl;
    std::cout << "  5. Add a New Book" << std::endl;
    std::cout << "  6. Add a New Patron" << std::endl;
    std::cout << "  7. Search by Author" << std::endl;
    std::cout << "  8. Search by Genre" << std::endl;
    std::cout << "  9. View Transaction Log" << std::endl;
    std::cout << "  0. Save and Exit" << std::endl;
    std::cout << "========================================" << std::endl;
    std::cout << "Enter your choice: ";
}

// Reads an integer from stdin; throws on invalid input
int getIntInput() {
    int val;
    std::cin >> val;
    if (std::cin.fail()) {
        std::cin.clear();
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        throw std::invalid_argument("Invalid input. Please enter a number.");
    }
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
    return val;
}

// Displays genre options and returns the user's selection
Genre selectGenre() {
    std::cout << "  Select Genre:" << std::endl;
    std::cout << "    1. Fiction" << std::endl;
    std::cout << "    2. NonFiction" << std::endl;
    std::cout << "    3. Mystery" << std::endl;
    std::cout << "    4. Science" << std::endl;
    std::cout << "    5. Biography" << std::endl;
    std::cout << "  Choice: ";

    int choice = getIntInput();
    switch (choice) {
        case 1: return Genre::Fiction;
        case 2: return Genre::NonFiction;
        case 3: return Genre::Mystery;
        case 4: return Genre::Science;
        case 5: return Genre::Biography;
        default: throw std::invalid_argument("Invalid genre selection.");
    }
}

// Entry point: loads data, runs the menu loop, saves on exit
int main() {
    Library library;

    // Attempt to load data files; continue with empty library on failure
    try {
        library.loadData();
    } catch (const std::exception& e) {
        std::cerr << "Error loading data: " << e.what() << std::endl;
        std::cerr << "Starting with empty library." << std::endl;
    }

    // Main menu loop
    bool running = true;
    while (running) {
        displayMenu();

        int choice;
        try {
            choice = getIntInput();
        } catch (const std::exception& e) {
            std::cerr << "Error: " << e.what() << std::endl;
            continue;
        }

        try {
            switch (choice) {
                case 1:
                    library.displayBooks();
                    break;

                case 2:
                    library.displayPatrons();
                    break;

                case 3: {
                    std::cout << "Enter Patron ID: ";
                    int pid = getIntInput();
                    std::cout << "Enter Book Title: ";
                    std::string title;
                    std::getline(std::cin, title);
                    library.checkoutBook(pid, title);
                    break;
                }

                case 4: {
                    std::cout << "Enter Patron ID: ";
                    int pid = getIntInput();
                    std::cout << "Enter Book Title: ";
                    std::string title;
                    std::getline(std::cin, title);
                    library.returnBook(pid, title);
                    break;
                }

                case 5: {
                    std::cout << "Enter Book Title: ";
                    std::string title;
                    std::getline(std::cin, title);
                    std::cout << "Enter Author: ";
                    std::string author;
                    std::getline(std::cin, author);

                    Genre genre = selectGenre();

                    std::cout << "  Book Type:" << std::endl;
                    std::cout << "    1. Printed Book" << std::endl;
                    std::cout << "    2. EBook" << std::endl;
                    std::cout << "  Choice: ";
                    int typeChoice = getIntInput();

                    if (typeChoice == 1) {
                        std::cout << "Enter Page Count: ";
                        int pages = getIntInput();
                        library.addBook(new PrintedBook(title, author, genre, pages));
                    } else if (typeChoice == 2) {
                        std::cout << "Enter File Size (MB): ";
                        double size;
                        std::cin >> size;
                        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
                        library.addBook(new EBook(title, author, genre, size));
                    } else {
                        std::cout << "Invalid book type." << std::endl;
                    }
                    break;
                }

                case 6: {
                    std::cout << "Enter Patron Name: ";
                    std::string name;
                    std::getline(std::cin, name);
                    std::cout << "Enter Patron ID: ";
                    int id = getIntInput();
                    library.addPatron(Patron(name, id));
                    break;
                }

                case 7: {
                    std::cout << "Enter Author Name: ";
                    std::string author;
                    std::getline(std::cin, author);
                    library.searchByAuthor(author);
                    break;
                }

                case 8: {
                    Genre genre = selectGenre();
                    library.searchByGenre(genre);
                    break;
                }

                case 9:
                    library.displayTransactions();
                    break;

                case 0:
                    library.saveData();
                    std::cout << "Goodbye!" << std::endl;
                    running = false;
                    break;

                default:
                    std::cout << "Invalid choice. Please try again." << std::endl;
            }
        } catch (const std::exception& e) {
            std::cerr << "Error: " << e.what() << std::endl;
        }
    }

    return 0;
}

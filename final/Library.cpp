#include "Library.h"
#include "EBook.h"
#include "PrintedBook.h"
#include <iostream>
#include <algorithm>
#include <stdexcept>

// Frees dynamically allocated Book objects
Library::~Library() {
    for (auto b : books) {
        delete b;
    }
}

// Parses CSV file and creates EBook or PrintedBook objects
void Library::loadBooks(const std::string& filename) {
    std::ifstream file(filename);
    if (!file) {
        throw std::runtime_error("Failed to open books file: " + filename);
    }

    std::string line;
    while (std::getline(file, line)) {
        if (line.empty()) continue;

        std::stringstream ss(line);
        std::string genreStr, title, author, type, extra;

        std::getline(ss, genreStr, ',');
        std::getline(ss, title, ',');
        std::getline(ss, author, ',');
        std::getline(ss, type, ',');
        std::getline(ss, extra, ',');

        Genre genre = stringToGenre(genreStr);

        if (type == "EBook") {
            double size = std::stod(extra);
            books.push_back(new EBook(title, author, genre, size));
        } else if (type == "Printed") {
            int pages = std::stoi(extra);
            books.push_back(new PrintedBook(title, author, genre, pages));
        } else {
            throw std::runtime_error("Unknown book type: " + type);
        }
    }
}

// Parses CSV file and creates Patron objects
void Library::loadPatrons(const std::string& filename) {
    std::ifstream file(filename);
    if (!file) {
        throw std::runtime_error("Failed to open patrons file: " + filename);
    }

    std::string line;
    while (std::getline(file, line)) {
        if (line.empty()) continue;

        std::stringstream ss(line);
        std::string idStr, name;

        std::getline(ss, idStr, ',');
        std::getline(ss, name);

        int id = std::stoi(idStr);
        patrons.push_back(Patron(name, id));
    }
}

// Writes all books back to CSV format
void Library::saveBooks(const std::string& filename) const {
    std::ofstream file(filename);
    if (!file) {
        throw std::runtime_error("Failed to open file for writing: " + filename);
    }

    for (const auto& b : books) {
        file << genreToString(b->getGenre()) << ","
             << b->getTitle() << ","
             << b->getAuthor() << ","
             << b->getType() << ","
             << b->getExtraField() << "\n";
    }
}

void Library::savePatrons(const std::string& filename) const {
    std::ofstream file(filename);
    if (!file) {
        throw std::runtime_error("Failed to open file for writing: " + filename);
    }

    for (const auto& p : patrons) {
        file << p.getId() << "," << p.getName() << "\n";
    }
}

// Appends transactions to log file
void Library::saveTransactions(const std::string& filename) const {
    std::ofstream file(filename, std::ios::app);
    if (!file) {
        throw std::runtime_error("Failed to open file for writing: " + filename);
    }

    for (const auto& t : transactions) {
        file << t.toFileString() << "\n";
    }
}

void Library::loadData() {
    loadBooks("books.txt");
    loadPatrons("patrons.txt");
    std::cout << "Data loaded successfully." << std::endl;
    std::cout << "  Books loaded: " << books.size() << std::endl;
    std::cout << "  Patrons loaded: " << patrons.size() << std::endl;
}

void Library::saveData() {
    saveBooks("books.txt");
    savePatrons("patrons.txt");
    saveTransactions("transactions.txt");
    std::cout << "Data saved successfully." << std::endl;
}

void Library::addBook(Book* b) {
    books.push_back(b);
    std::cout << "Book added: " << *b << std::endl;
}

// Adds patron after checking for duplicate IDs
void Library::addPatron(const Patron& p) {
    for (const auto& existing : patrons) {
        if (existing == p) {
            throw std::runtime_error("Patron with ID " + std::to_string(p.getId()) + " already exists.");
        }
    }
    patrons.push_back(p);
    std::cout << "Patron added: " << p << std::endl;
}

// Validates patron/book, updates status, and logs the transaction
void Library::checkoutBook(int patronId, const std::string& title) {
    Patron* patron = findPatron(patronId);
    if (!patron) {
        throw std::runtime_error("Patron with ID " + std::to_string(patronId) + " not found.");
    }

    Book* book = findBook(title);
    if (!book) {
        throw std::runtime_error("Book \"" + title + "\" not found in library.");
    }

    if (book->getStatus() == BookStatus::CheckedOut) {
        throw std::runtime_error("Book \"" + title + "\" is already checked out.");
    }

    book->setStatus(BookStatus::CheckedOut);
    patron->borrowBook(book);
    transactions.push_back(Transaction(patronId, title, "Checkout"));

    std::cout << "Book \"" << title << "\" checked out to Patron #" << patronId << "." << std::endl;
}

// Validates patron/book, marks available, and logs the transaction
void Library::returnBook(int patronId, const std::string& title) {
    Patron* patron = findPatron(patronId);
    if (!patron) {
        throw std::runtime_error("Patron with ID " + std::to_string(patronId) + " not found.");
    }

    Book* book = findBook(title);
    if (!book) {
        throw std::runtime_error("Book \"" + title + "\" not found in library.");
    }

    if (book->getStatus() == BookStatus::Available) {
        throw std::runtime_error("Book \"" + title + "\" is not checked out.");
    }

    book->setStatus(BookStatus::Available);
    patron->returnBook(book);
    transactions.push_back(Transaction(patronId, title, "Return"));

    std::cout << "Book \"" << title << "\" returned by Patron #" << patronId << "." << std::endl;
}

void Library::displayBooks() const {
    std::cout << "\n===== Library Books =====" << std::endl;
    if (books.empty()) {
        std::cout << "  No books in the library." << std::endl;
        return;
    }
    for (size_t i = 0; i < books.size(); ++i) {
        std::cout << "  " << (i + 1) << ". ";
        books[i]->displayInfo();
    }
    std::cout << std::endl;
}

void Library::displayPatrons() const {
    std::cout << "\n===== Library Patrons =====" << std::endl;
    if (patrons.empty()) {
        std::cout << "  No patrons registered." << std::endl;
        return;
    }
    for (const auto& p : patrons) {
        std::cout << "  " << p << std::endl;
    }
    std::cout << std::endl;
}

void Library::displayTransactions() const {
    std::cout << "\n===== Transaction Log =====" << std::endl;
    if (transactions.empty()) {
        std::cout << "  No transactions recorded." << std::endl;
        return;
    }
    for (const auto& t : transactions) {
        std::cout << "  ";
        t.displayTransaction();
    }
    std::cout << std::endl;
}

// Partial match search on author name
void Library::searchByAuthor(const std::string& author) const {
    std::cout << "\n===== Search Results: Author \"" << author << "\" =====" << std::endl;
    bool found = false;
    for (const auto& b : books) {
        if (b->getAuthor().find(author) != std::string::npos) {
            std::cout << "  " << *b << std::endl;
            found = true;
        }
    }
    if (!found) {
        std::cout << "  No books found by author \"" << author << "\"." << std::endl;
    }
}

// Filters books by exact genre match
void Library::searchByGenre(Genre genre) const {
    std::cout << "\n===== Search Results: Genre \"" << genreToString(genre) << "\" =====" << std::endl;
    bool found = false;
    for (const auto& b : books) {
        if (b->getGenre() == genre) {
            std::cout << "  " << *b << std::endl;
            found = true;
        }
    }
    if (!found) {
        std::cout << "  No books found in genre \"" << genreToString(genre) << "\"." << std::endl;
    }
}

Book* Library::findBook(const std::string& title) const {
    for (auto b : books) {
        if (b->getTitle() == title) return b;
    }
    return nullptr;
}

Patron* Library::findPatron(int id) {
    for (auto& p : patrons) {
        if (p.getId() == id) return &p;
    }
    return nullptr;
}

#ifndef LIBRARY_H
#define LIBRARY_H

#include "Book.h"
#include "Patron.h"
#include "Transaction.h"
#include <vector>
#include <string>
#include <fstream>
#include <sstream>

template <typename T>
void saveToFile(const std::string& filename, const std::vector<T>& items);

class Library {
    std::vector<Book*> books;
    std::vector<Patron> patrons;
    std::vector<Transaction> transactions;

public:
    ~Library();
    void loadBooks(const std::string& filename);
    void loadPatrons(const std::string& filename);
    void saveBooks(const std::string& filename) const;
    void savePatrons(const std::string& filename) const;
    void saveTransactions(const std::string& filename) const;
    void loadData();
    void saveData();

    void addBook(Book* b);
    void addPatron(const Patron& p);
    void checkoutBook(int patronId, const std::string& title);
    void returnBook(int patronId, const std::string& title);

    void displayBooks() const;
    void displayPatrons() const;
    void displayTransactions() const;
    void searchByAuthor(const std::string& author) const;
    void searchByGenre(Genre genre) const;

    Book* findBook(const std::string& title) const;
    Patron* findPatron(int id);
};

#endif

#ifndef PATRON_H
#define PATRON_H

#include <string>
#include <vector>
#include <iostream>

class Book;

// Represents a library patron who can borrow and return books
class Patron {
    std::string name;
    int id;
    std::vector<Book*> borrowedBooks;

public:
    Patron(std::string n, int i);
    void borrowBook(Book* b);
    void returnBook(Book* b);
    void displayPatron() const;

    std::string getName() const;
    int getId() const;
    const std::vector<Book*>& getBorrowedBooks() const;

    bool operator==(const Patron& other) const;
    friend std::ostream& operator<<(std::ostream& os, const Patron& p);
};

#endif

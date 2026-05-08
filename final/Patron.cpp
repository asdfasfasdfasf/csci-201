#include "Patron.h"
#include "Book.h"
#include <algorithm>
#include <stdexcept>

Patron::Patron(std::string n, int i)
    : name(std::move(n)), id(i) {}

void Patron::borrowBook(Book* b) {
    borrowedBooks.push_back(b);
}

void Patron::returnBook(Book* b) {
    auto it = std::find(borrowedBooks.begin(), borrowedBooks.end(), b);
    if (it == borrowedBooks.end()) {
        throw std::runtime_error("Patron " + name + " does not have this book checked out.");
    }
    borrowedBooks.erase(it);
}

void Patron::displayPatron() const {
    std::cout << "Patron ID: " << id << " | Name: " << name << " | Books Borrowed: " << borrowedBooks.size() << std::endl;
    for (const auto& b : borrowedBooks) {
        std::cout << "  - " << b->getTitle() << std::endl;
    }
}

std::string Patron::getName() const { return name; }
int Patron::getId() const { return id; }
const std::vector<Book*>& Patron::getBorrowedBooks() const { return borrowedBooks; }

bool Patron::operator==(const Patron& other) const {
    return id == other.id;
}

std::ostream& operator<<(std::ostream& os, const Patron& p) {
    os << "Patron #" << p.id << ": " << p.name << " (" << p.borrowedBooks.size() << " books borrowed)";
    return os;
}

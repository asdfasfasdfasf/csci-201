#include "Book.h"
#include <stdexcept>

// Convert Genre enum to string for display and file output
std::string genreToString(Genre g) {
    switch (g) {
        case Genre::Fiction:    return "Fiction";
        case Genre::NonFiction: return "NonFiction";
        case Genre::Mystery:    return "Mystery";
        case Genre::Science:    return "Science";
        case Genre::Biography:  return "Biography";
    }
    return "Unknown";
}

// Convert string from file input back to Genre enum
Genre stringToGenre(const std::string& s) {
    if (s == "Fiction")    return Genre::Fiction;
    if (s == "NonFiction") return Genre::NonFiction;
    if (s == "Mystery")    return Genre::Mystery;
    if (s == "Science")    return Genre::Science;
    if (s == "Biography")  return Genre::Biography;
    throw std::invalid_argument("Unknown genre: " + s);
}

std::string statusToString(BookStatus s) {
    return (s == BookStatus::Available) ? "Available" : "Checked Out";
}

// Constructor initializes book as Available by default
Book::Book(std::string t, std::string a, Genre g)
    : title(std::move(t)), author(std::move(a)), genre(g), status(BookStatus::Available) {}

// Prints base book info; derived classes append their extra fields
void Book::displayInfo() const {
    std::cout << "Title: " << title
              << " | Author: " << author
              << " | Genre: " << genreToString(genre)
              << " | Status: " << statusToString(status);
}

void Book::setStatus(BookStatus s) { status = s; }
BookStatus Book::getStatus() const { return status; }
std::string Book::getTitle() const { return title; }
std::string Book::getAuthor() const { return author; }
Genre Book::getGenre() const { return genre; }

// Two books are equal if they share the same title and author
bool Book::operator==(const Book& other) const {
    return title == other.title && author == other.author;
}

std::ostream& operator<<(std::ostream& os, const Book& b) {
    os << "\"" << b.title << "\" by " << b.author
       << " [" << genreToString(b.genre) << ", " << statusToString(b.status) << "]";
    return os;
}

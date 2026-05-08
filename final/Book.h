#ifndef BOOK_H
#define BOOK_H

#include <string>
#include <iostream>

// Enumerations for book classification and availability
enum class Genre { Fiction, NonFiction, Mystery, Science, Biography };
enum class BookStatus { Available, CheckedOut };

// Utility functions to convert enums to/from strings for file I/O
std::string genreToString(Genre g);
Genre stringToGenre(const std::string& s);
std::string statusToString(BookStatus s);

// Abstract base class representing a book in the library
class Book {
protected:
    std::string title;
    std::string author;
    Genre genre;
    BookStatus status;

public:
    Book(std::string t, std::string a, Genre g);
    virtual ~Book() = default;

    virtual void displayInfo() const;
    virtual std::string getType() const = 0;       // "EBook" or "Printed"
    virtual std::string getExtraField() const = 0;  // file size or page count as string

    void setStatus(BookStatus s);
    BookStatus getStatus() const;
    std::string getTitle() const;
    std::string getAuthor() const;
    Genre getGenre() const;

    bool operator==(const Book& other) const;                        // compares by title and author
    friend std::ostream& operator<<(std::ostream& os, const Book& b); // formatted output
};

#endif

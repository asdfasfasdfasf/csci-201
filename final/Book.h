#ifndef BOOK_H
#define BOOK_H

#include <string>
#include <iostream>

enum class Genre { Fiction, NonFiction, Mystery, Science, Biography };
enum class BookStatus { Available, CheckedOut };

std::string genreToString(Genre g);
Genre stringToGenre(const std::string& s);
std::string statusToString(BookStatus s);

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
    virtual std::string getType() const = 0;
    virtual std::string getExtraField() const = 0;

    void setStatus(BookStatus s);
    BookStatus getStatus() const;
    std::string getTitle() const;
    std::string getAuthor() const;
    Genre getGenre() const;

    bool operator==(const Book& other) const;
    friend std::ostream& operator<<(std::ostream& os, const Book& b);
};

#endif

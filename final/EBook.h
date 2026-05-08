#ifndef EBOOK_H
#define EBOOK_H

#include "Book.h"

// Derived class representing a digital book with a file size
class EBook : public Book {
    double fileSizeMB;

public:
    EBook(std::string t, std::string a, Genre g, double size);
    void displayInfo() const override;
    std::string getType() const override;
    std::string getExtraField() const override;
    double getFileSize() const;
};

#endif

#ifndef PRINTEDBOOK_H
#define PRINTEDBOOK_H

#include "Book.h"

class PrintedBook : public Book {
    int pageCount;

public:
    PrintedBook(std::string t, std::string a, Genre g, int pages);
    void displayInfo() const override;
    std::string getType() const override;
    std::string getExtraField() const override;
    int getPageCount() const;
};

#endif

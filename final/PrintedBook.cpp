#include "PrintedBook.h"

PrintedBook::PrintedBook(std::string t, std::string a, Genre g, int pages)
    : Book(std::move(t), std::move(a), g), pageCount(pages) {}

void PrintedBook::displayInfo() const {
    Book::displayInfo();
    std::cout << " | Pages: " << pageCount << std::endl;
}

std::string PrintedBook::getType() const { return "Printed"; }

std::string PrintedBook::getExtraField() const { return std::to_string(pageCount); }

int PrintedBook::getPageCount() const { return pageCount; }

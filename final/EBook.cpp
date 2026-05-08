#include "EBook.h"
#include <sstream>

EBook::EBook(std::string t, std::string a, Genre g, double size)
    : Book(std::move(t), std::move(a), g), fileSizeMB(size) {}

void EBook::displayInfo() const {
    Book::displayInfo();
    std::cout << " | File Size: " << fileSizeMB << " MB" << std::endl;
}

std::string EBook::getType() const { return "EBook"; }

std::string EBook::getExtraField() const {
    std::ostringstream oss;
    oss << fileSizeMB;
    return oss.str();
}

double EBook::getFileSize() const { return fileSizeMB; }

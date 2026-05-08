#include "Transaction.h"
#include <ctime>

Transaction::Transaction(int pid, std::string bt, std::string transType)
    : patronId(pid), bookTitle(std::move(bt)), type(std::move(transType)) {
    time_t now = time(nullptr);
    char buf[80];
    strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", localtime(&now));
    date = buf;
}

void Transaction::displayTransaction() const {
    std::cout << "[" << date << "] " << type << " - Patron #" << patronId << " | Book: \"" << bookTitle << "\"" << std::endl;
}

std::string Transaction::toFileString() const {
    return date + "," + std::to_string(patronId) + "," + bookTitle + "," + type;
}

int Transaction::getPatronId() const { return patronId; }
std::string Transaction::getBookTitle() const { return bookTitle; }
std::string Transaction::getDate() const { return date; }
std::string Transaction::getType() const { return type; }

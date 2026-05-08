#ifndef TRANSACTION_H
#define TRANSACTION_H

#include <string>
#include <iostream>

class Transaction {
    int patronId;
    std::string bookTitle;
    std::string date;
    std::string type;

public:
    Transaction(int pid, std::string bt, std::string transType);
    void displayTransaction() const;
    std::string toFileString() const;

    int getPatronId() const;
    std::string getBookTitle() const;
    std::string getDate() const;
    std::string getType() const;
};

#endif

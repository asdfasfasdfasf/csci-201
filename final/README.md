# Library Management System

C++ console application that manages books, patrons, and borrowing transactions.

## Features
- Add/view books (EBook and PrintedBook types) and patrons
- Check out and return books
- Search by author or genre
- Transaction logging with timestamps
- Persistent data via CSV file I/O

## Inputs
- Menu selections (0–9) to navigate the system
- Book details: title, author, genre, type (Printed/EBook), page count or file size
- Patron details: name, ID
- Patron ID and book title for checkout/return
- Author name or genre for searching
- Data files: `books.txt` and `patrons.txt` loaded at startup

## Outputs
- Formatted lists of all books (with type, genre, status) and patrons (with borrowed book count)
- Checkout/return confirmation messages
- Search results filtered by author or genre
- Timestamped transaction log
- Error messages for invalid input, missing books, duplicate patrons, etc.
- Saved data files: `books.txt`, `patrons.txt`, `transactions.txt` on exit

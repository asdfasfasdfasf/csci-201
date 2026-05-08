CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra
TARGET = library
SRCS = main.cpp Book.cpp EBook.cpp PrintedBook.cpp Patron.cpp Transaction.cpp Library.cpp
OBJS = $(SRCS:.cpp=.o)

$(TARGET): $(OBJS)
	$(CXX) $(CXXFLAGS) -o $(TARGET) $(OBJS)

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(TARGET)

.PHONY: clean

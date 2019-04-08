mkdir C:/Users/agelosnm/Documents/sha/1_git/Shell/Homework
cd C:/Users/agelosnm/Documents/sha/1_git/Shell/Homework 

for i in 1 2 3 4 5
do
  echo "Hello" >> greetings.txt
done

cp greetings.txt C:/Users/agelosnm/Documents/sha/1_git/Shell/Homework/greetings1.txt

for i in 1 2 3 4 5
do
  cat greetings1.txt >> $i.txt
done

echo "cat" >> pets.txt
echo "dog" >> pets.txt
echo "hamster" >> pets.txt

echo "cat" >> commands.txt
echo "ls" >> commands.txt
echo "pwd" >> commands.txt

cat pets.txt >> tmp.txt
cat commands.txt >> tmp.txt
sort -u tmp.txt > lovelyCommands.txt

#cat pets.txt commands.txt | sort | uniq >> lovelyCommands.txt

echo -----------------------------------------------------------------
echo unique words of pets.txt and commands.txt "in" lovelyCommands.txt
echo -----------------------------------------------------------------

cat lovelyCommands.txt

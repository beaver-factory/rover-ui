FILE=.env

if [ -f "$FILE" ]
then
    echo "$FILE already exists."
else
    echo "$FILE doesn't exist."
    echo "VITE_NASA_KEY = 'YOUR KEY HERE'" >> "$FILE"
fi
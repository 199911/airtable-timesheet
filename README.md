# Airtable Timesheet

A simple cli command to record task on airtable

## Set up

1. Copy the base from example
    - https://airtable.com/invite/l?inviteId=inv9sQOYI2AhSH0gv&inviteToken=3394597e3997ea0c67f85c2f65946dec
2. Duplicate a table and rename to format `ddMmm`, like `25Jun`
3. Set up columns
	1.  ID: auto number
	2.  Description: long text
	3.  Difficulty: single select (TODO: tags)
	4.  Mood: single select (TODO: tags)
	5.  Start: Date
	6.  End: Date
4. Set up api key and base in config.json
5. Set up the cli (TODO: add more detail)
    - `npm install`
    - `ln -s $(pwd)/bin /usr/local/bin/t`

## Todo

1. Customized tag for mood
2. Use number to represent difficulty
3. Sort the record by time is list command

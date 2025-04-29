# Overview

This is a fork of getify/workshop-periodic-table, presented in a workshop held by Kyle Simpson on Frontend Masters. I've merged my implementation into the main branch of this (forked) repository.

# Original README content

## Periodic Table Speller

This workshop project explores the algorithmic complexities (speed and memory) of checking if an input word can be "spelled" (case-insensitive) by a sequence of the chemical symbol abbreviations from the standard periodic table.

![Periodic Table](https://cdn.shopify.com/s/files/1/1064/0118/files/periodic-table-of-tech-standalone_alt.png)

For example, the word "accept" can be spelled with Ac (Actinium) + Ce (Cerium) + Pt (Platinum).

The goal of this tool is to check if an input word can be "spelled" with the periodic table symbols, and then to show that sequence of element symbols.

## Workshop Instructions

1. Check out the `start-here` branch.

2. Consult the `app.js` module for the app logic already implemented:

    * Calls `Speller.check(..)` to attempt to spell an input word with the periodic table element symbols.

    * Calls `Speller.lookup(..)` to pull the periodic table element by its symbol (case-insensitive).

    * Note also the list of known test words in code comments. You'll want to use these as you test your solution!

3. Now consult the `speller.js` module for the algorithm logic to be implemented (look for the `TODO` comments):

    * The `loadPeriodicTable()` function loads the `periodic-table.json` file into the `elements` variable.

    * The `check(..)` function accepts an input word as a string (all lowercase letters) and returns an array (empty array if word couldn't be spelled).

    * The `lookup(..)` function accepts a symbol (as a string) and returns the periodic table element's entry/info, used to render the spelling as periodic table elements.

4. When you're ready, or if you get stuck in your own implementation, check out the `option-1`, `option-2`, and `option-3` branches and compare your solution to the ones provided.

## Acknowledgments

This workshop problem is similar to/inspired by [ChemSpeller](https://www.chemspeller.com/index.html).

The JSON file holding periodic table elements was adapted from: https://github.com/Bowserinator/Periodic-Table-JSON/blob/master/PeriodicTableJSON.json

## Workshop Resources

This repository is part of my "Thinking & Coding Algorithms" workshop, which has been presented at a number of public JS/web conferences, as well as for private corporate training engagements. In addition, it is included in my [Frontend Masters course on algorithms and data structures](https://frontendmasters.com/courses/algorithms-practice/).

Please note that as this material evolves/improves over time, there may be changes to the branch names (e.g., "Option-1", "Option-2b", etc) to make room for these changes while preserving (as much as possible) the repository state as presented in various different workshops. When that current state appears to have diverged, please consult the git commit history to access older versions of files/resources.

## License

All code and documentation are (c) 2023 Kyle Simpson and released under the [MIT License](http://getify.mit-license.org/). A copy of the MIT License [is also included](LICENSE.txt).

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JS DOM & Events Virtual Keyboard

In this exercise we'll be working with events and input fields.

## Prerequisites

- DOM Methods
- Event Listeners
- CSS

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

Starter code is available in [`lib/index.html`](lib/index.html). You are
required to turn in your submission by making a pull request on the original
repository.

Unless otherwise specified on the calendar or by an instructor, homework is due
the next morning by 9:00am.

## Requirements

Using the starter code, add an event listener to the input field. There are two
events we will use today - `keydown` and `keyup`.

On keydown, get the relevant keycode or key name. See them here:
https://keycode.info/

While the key is pressed (keydown), add the `active` class to the div containing
that same letter. So if q is pressed, highlight the q on the keyboard. This will
highlight the letter on the page.

When the key is released (keyup), remove the class. You may have to add another
even listener to the input field for this.

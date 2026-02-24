Q1:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: i)getElementById() selects one element by its unique id.
    ii)getElementsByClassName() selects multiple elements by class name
    iii)querySelector() select elements using any CSS selector and returns the first match
    iv)querySelectorAll() select elements using any CSS selector returns all matches.

Q2:
How do you create and insert a new element into the DOM?
Ans: By using document.createElement() we can create a DOM.
    By using appendChild() we can insert a new element into the DOM.

Q3:
 What is Event Bubbling? And how does it work?
Ans: Event Bubbling is a process in the DOM where an event starts from the target element and then goes to         
     its parent elements one by one until it reaches the root.
     It works like this:
     1.click  a child element.
     2.The event first runs on that element
     3.Then it moves up to its parent.
     4.Then to the grandparent.
     5.It continues upward until it reaches the root.


Q4:
What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element to handle events for its child elements using event bubbling.

Usefulness:
    1.Improves performance
    2.Works for dynamically added elements
    3.Cleaner and more maintainable code.

Q5:
 What is the difference between preventDefault() and stopPropagation() methods?
 Ans: preventDefault() stops the browser’s default action. Example: preventing a form from submitting or a link   from navigating.
    stopPropagation() stops the event from bubbling up the DOM, meaning parent elements won’t receive the event.

    So at last we can say preventDefault() blocks the browser behavior, while stopPropagation() blocks the event flow.
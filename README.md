Botwire
=======

A super simple starter kit for modular HTML wireframes that uses Jekyll and Sass to break wireframes down into easily reusable components. Out of the box, Botwire borrows from a few existing frameworks for things like a grid-system (bourbon neat), ready-made styles (bourbon and bourbon bitters), and more (e.g. foundation can be optionally enabled). Botwire intends to provide boilerplates for some of the most common components and pieces needed for creating HTML wireframes. Botwire is NOT a complete wireframing framework (see [Foundation}](http://foundation.zurb.com), [Gumby](http://gumbyframework.com) or others if you're looking for that).

---

## What's included in Botwire

Honestly, very little. At the moment, Botwire gives you ...

- A basic Jekyll project structure
- An initial structure for your Sass
- A few ready-made boilerplate components
- Some simple include perameters to make including components simple
- A few basic wireframe style patterns
- A way to insert hipster ipsum text into your wireframes
- An interface styleguide boilerplate

---

## How to use Botwire

There are a couple ways you might use Botwire.

1. Fork Botwire and simply rename your project (Go to "Settings" on your forked Github project to rename it) to whatever you'd like and start using it.
2. Simply download the packaged ZIP of Botwire and make your own project.

Once you have a local project setup on your machine, you'll still need to learn a little about using Jekyll (see info below).

---

## Creating and including components

Components are simply modular bits of markup and the styles associated with that markup (e.g. navigation, comments, etc.). Jekyll allows us to break the HTML markup of a page into separate files that can be included within other files. Botwire uses one include file to do this (_includes/component.html) and then uses include parameters to assign which component should be included. So, to create a new component, simply do as follows ...

### Creating a new component

_for the purposes of these instructions, I'll assume you want to name your component "my-component"_

1. Create a folder for your component in _includes/components/common or _includes/components/custom (I'll explain common vs custom later). You'll need to name your folder a URL-friendly name (meaning don't use spaces, underscores or anything fancy).
2. Create a _my-component.html_ file and a _my-component.scss_ file inside your new component folder.
3. Add your _my-component.scss_ file to the list of included component imports in _scss/style.scss like this <code>@import "../_includes/components/my-component/my-component";</code> _Note: scss includes only require the file name, not the file suffix in the import statement._
4. Write your markup into _my-component.html_ and the styles for that markup into _my-component.scss_.

Voila!

### Using or including a component

The pattern for including a component within one of your wireframes is as follows ...

```
{% include component.html component="my-component" %}
```

By default, your component markup that you write in your _my-component.html_ will be wrapped in an article element and assigned a class of "component" as well your component name (e.g. class="component my-component"). You can override the element or add an additional class or id to any component using additional include parameters as follows ...

```
{% include component.html component="my-component" element="section" class="my-class" id="my-id" %}
```

The above example would output the following markup when Jekyll builds your site ...

```
<section class="component my-component my-class" id="my-id">
  <!-- contents of my-component.html would show here -->
</section>
```

### Common vs Custom components

You may have noticed in the instructions above or in the directory structure of Botwire's _includes that I have both a components/common and components/custom folder. My goal here wasn't simply to introduce complexity, but to allow for the fact that as modular wireframes grow you can wind up with LOTS of components, some of which you may want to reuse on your next project and others that are completely custom to a specific project. The idea here is that components that you might reuse later on other projects can go in the common folder, and all others in the custom folder. The common folder is the default folder, so if you place your commponent in that folder you will not need to use the "type" parameter, it will all just work. However, if you place a component in the custom folder, you'll need to indicate that with the type parameter when you include that component as follows ...

```
{% include component.html component="my-component" type="custom" %}
```

This same principle applies to creating new navigation components or creating your own custom folders to keep your growing list of components organized. The folder name you create will need to be passed via the type parameter. So, if for example you create a new folder called "wacky" to hold all your wacky components, you would include your new wacky-component as follows ...

```
{% include component.html component="my-wacky-component" type="wacky" %}
``

---

## Using hipster ipsum

This isn't that elegant, but it works. In order to insert some dummy copy into a wireframe, you can follow the patterns shown in _samples/hipster-ipsum.html. 

### Add a specific number of paragraphs, up to 9

To add a specific number of paragraphs of dummy copy use the following code (the following example creates 2 paragraphs) ...

```
{{ site.hipsum | split:'<!-- p2 -->' | first }}
```

### Add a specific, truncated number of words

To add text that will display as truncated to a specific word count, use the following code (the following example truncates to 13 words) ...

```
<p>{{ site.hipsum | strip_html | truncatewords: 13 }}</p>
```

---

## Getting started with Jekyll

If you'd like to spin up a local copy of the site and make edits, here are some quick instructions for how to get Jekyll up and running.

### Installing Jekyll

Full documentation for installing Jekyll can be found at http://jekyllrb.com/docs/installation/. Assuming your machine has Ruby installed, you can install Jekyll by simply running the following at a terminal prompt ...

	$ sudo gem install jekyll

### Building the Jekyll site

If Jekyll is installed on your machine, then you can simply clone the repository onto your machine, and then from a terminal prompt you can cd into the project's root directory and run jekyll build, like so ...

	$ cd ~/Sites/namm-foundation
	$ jekyll build

When you run jekyll build, Jekyll will create the _site directory and compile everything there.

### More Jekyll help and info

You can find more documentation at the [official Jekyll site](http://jekyllrb.com), and there are lots of helpful tutorials and how-to's out there on the interwebs. A particularly helpful video is available for purchase from [Mijingo called Static Websites with Jekyll](http://mijingo.com/products/screencasts/static-websites-with-jekyll/).

### Github Pages

To view the wireframes and mocks online, you can use Github Pages. Github Pages automagically publishes the gh-pages branch to http://accountname.github.io/project-name (accountname is your github user name and project-name is the name of your github project you've forked Botwire into). If you make a change to the master branch, simply merge that change into the gh-pages branch to see it online at http://accountname.github.io/project-name.

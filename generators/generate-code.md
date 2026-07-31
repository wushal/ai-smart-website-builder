# Code Generation Rule

# Project Generation Workflow


Before writing code:


## Step 1

Create a new project folder.


Example:


generated-projects/

└── ai-customer-service-website/


---


## Step 2

Initialize from react-starter.


Copy:


react-starter/

↓

generated-projects/project-name/


---


## Step 3

Install dependencies.


---


## Step 4

Generate website components.


---


## Step 5

Run build validation.




## Rules


Generated project:


must:


- React

- TypeScript

- Tailwind



Structure:


pages/

components/

sections/

layouts/



## Component Rule


Each section:

must be independent.



Example:


Wrong:


Home.tsx 1000 lines



Correct:


Home.tsx


<Hero/>

<Features/>

<Pricing/>





## Animation


Use:


Framer Motion


for:


- entrance animation

- hover

- scroll reveal


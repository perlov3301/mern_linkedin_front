https://github.com/LinkedInLearning/react-creating-and-hosting-a-full-stack-site-3209140

ä ë ï ö ü Ä Ë Ï Ö Ü
github repository:
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/perlov3301/mern_linkedin_front.git
or
git remote set-url origin https://github.com/perlov3301/mern_linkedin
_front.git
git remote -v
git push -u origin main

*axios:network error
Basically, before generating every response, you need to set header 'Access-Control-Allow-Origin' 
to localhost:<port you visit in the browser>
or
in front End add to package.json:
"proxy":"http://localhost:8000/"
plus within axios.get(url)
instead of url=
`http://localhost:8000/api/articles/${articleId}`
url with proxy=
`/api/articles/${articleId}`


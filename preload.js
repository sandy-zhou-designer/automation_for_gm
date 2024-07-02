var minify = require('html-minifier').minify;

let globalSheetData = null;

/////////////
///new  https://sheetdb.io/api/v1/73azqe7iqovea
//oldhttps://sheetdb.io/api/v1/dvxec37bz9n3v

const fetchSheetData = async () => {
    try {
        const response = await fetch('https://sheetdb.io/api/v1/73azqe7iqovea', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assign the data to the global variable
        globalSheetData = data;

    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
};



//////////




var otherNewsletter1= ""
var otherNewsletter2= ""
var tv="";
var template = "";
var article = "";
var opinion = "";
var other = "";
var top="";
var highlight=""
var highlight2=""
var list =""
var first=""
var includingPromo =false;
var recommends = ""
var happy=""
var newsletter = "sevenDays"
var version = "layoutA"
var userType = "paid"
var templateList ={
    sevenDay:{
        template:"./templates/7days-trending/newsletter_stripped_template.html",
        article:"./templates/7days-trending/article_stripped_template.html"

    }, 
    epochTV:{
       template:"./templates/epochTV/newsletter_stripped_template.html",
       article:"./templates/epochTV/article_stripped_template.html"
    },
     morningbrief:{
       template:"./templates/morning_brief/newsletter_stripped_template.html",
        template2:"./templates/morning_brief/newsletter_stripped_templateB.html",
       article:"./templates/morning_brief/article_stripped_template.html",
       top2:"./templates/morning_brief/top_stripped_templateB.html",
       article2:"./templates/morning_brief/article2_stripped_template.html",
       opinion:"./templates/morning_brief/opinion_stripped_template.html",
        opinion2:"./templates/morning_brief/opinion_stripped_templateB.html",
       other:"./templates/morning_brief/other_stripped_template.html",
       other2:"./templates/morning_brief/other_stripped_templateB.html",
       tv:"./templates/morning_brief/tv_stripped_template.html",
       tv2:"./templates/morning_brief/tv_stripped_templateB.html",
       top:"./templates/morning_brief/top_stripped_template.html",
       highlight:"./templates/morning_brief/highlight_stripped_template.html",
        highlight2:"./templates/morning_brief/highlight2_stripped_template.html",
        highlightB:"./templates/morning_brief/highlight_stripped_templateB.html",
        highlightB2:"./templates/morning_brief/highlight2_stripped_templateB.html",
       list:"./templates/morning_brief/list_stripped_template.html",
       list2:"./templates/morning_brief/list_stripped_templateB.html",
       first:"./templates/morning_brief/first_stripped_template.html",
       // first2:"./templates/morning_brief/first_stripped_templateB.html",
       recommends:"./templates/morning_brief/recommends_stripped_template.html",
       happy:"./templates/morning_brief/happymoments_stripped_template.html",
       happy2:"./templates/morning_brief/happymoments_stripped_templateB.html"
       
    },
     weekendbrief:{
       template:"./templates/weekend_brief/newsletter_stripped_template.html",
       template2:"./templates/weekend_brief/newsletter_stripped_templateB.html",
       article:"./templates/weekend_brief/article_stripped_template.html",
       article2:"./templates/weekend_brief/article2_stripped_template.html",
       opinion:"./templates/weekend_brief/opinion_stripped_template.html",
       opinion2:"./templates/weekend_brief/opinion_stripped_templateB.html",
       other:"./templates/weekend_brief/other_stripped_template.html",
       tv:"./templates/weekend_brief/tv_stripped_template.html",
       tv2:"./templates/weekend_brief/tv_stripped_templateB.html",
       top:"./templates/weekend_brief/top_stripped_template.html",
       highlight:"./templates/weekend_brief/highlight_stripped_template.html",
       list:"./templates/weekend_brief/list_stripped_template.html",
        list2:"./templates/weekend_brief/list_stripped_templateB.html",
       first:"./templates/weekend_brief/first_stripped_template.html",
       recommends:"./templates/weekend_brief/recommends_stripped_template.html",
    happy:"./templates/weekend_brief/happymoments_stripped_template.html",
       happy2:"./templates/weekend_brief/happymoments_stripped_templateB.html"
    },
     oldbrief:{
       template:"./templates/old_brief/newsletter_stripped_template.html",
       template2:"./templates/old_brief/newsletter_stripped_templateB.html",
       article:"./templates/old_brief/article_stripped_template.html",
        top:"./templates/old_brief/top_stripped_template.html",
          top2:"./templates/old_brief/top_stripped_templateB.html",
         opinion:"./templates/old_brief/opinion_stripped_template.html",
         
     
    }

}

var dividerHtml=""



var listOfUtms = {
     "sevenDays":"7day_",
      "epochTV":"epochTV_",
      "morningbrief":"MB_article_",
      "weekendbrief":"MB_article_",
      "oldbrief":"MB_article_"
}


var otherNewslettersList ={
   
    
    debrief:"./templates/morning_brief/other/debrief.html",
    wellness:"./templates/morning_brief/other/wellness.html",
    goodlife:"./templates/morning_brief/other/good_life.html",
    conrad:"./templates/morning_brief/other/conradblack.html",
    guthealth:"./templates/morning_brief/other/guthealth.html",
    history:"./templates/morning_brief/other/history.html",
    nutrition:"./templates/morning_brief/other/nutrition.html",
    integrative:"./templates/morning_brief/other/integrative.html",
    // vaccine:"./templates/morning_brief/other/vaccine.html",
    arthritis:"./templates/morning_brief/other/arthritis.html",
    aging_well:"./templates/morning_brief/other/aging_well.html",
 



   

}


var letter1 =""
var letter2=""

function getNewslettersByDate() {
    const keys = Object.keys(otherNewslettersList);
    const date = new Date();
    const dayOfMonth = date.getDate();  // Get the day of the month (1-31)

    // Calculate indices based on the day of the month
    const index1 = (dayOfMonth % keys.length);
    const index2 = (index1 + 1) % keys.length;  // Ensure a different index is chosen

   letter1 = otherNewslettersList[keys[index1]];
  letter2 = otherNewslettersList[keys[index2]];

    // console.log('Today\'s Newsletters:', letter1 , letter2);
    // return [letter1 , letter2];
}




var newsletterTemplate = templateList["sevenDay"];



window.addEventListener('DOMContentLoaded', async () => {

        
		promoCheckbox = document.querySelector('input[name="promo-check"]');
        radioActions()
        abTestingAction()
        userTypeAction()

        document.querySelector('#submit').onclick = async function(e) {
        e.preventDefault()

        waitOn()

        // console.log("currentTemplate",newsletter)
        // if(newsletter=="weekendbrief"){

        // }else if(newsletter=="morningbrief"){

        // }
        includingPromo = promoCheckbox.checked

        if (version === "layoutB" || (newsletter === "oldbrief" && !includingPromo)) {

            console.log("old morning brief paid")
           
            template = await openTemplate(newsletterTemplate.template2)
             if(newsletterTemplate.top2) top = await openTemplate(newsletterTemplate.top2)
  
            // if(newsletterTemplate.list2) list = await openTemplate(newsletterTemplate.list2)
            // if(newsletterTemplate.happy2) happy = await openTemplate(newsletterTemplate.happy2)
            // if(newsletterTemplate.tv2) tv= await openTemplate(newsletterTemplate.tv2)

              // article = await openTemplate(newsletterTemplate.article2)
              // if(newsletterTemplate.opinion2) opinion = await openTemplate(newsletterTemplate.opinion2)
              // if(newsletterTemplate.top2) top = await openTemplate(newsletterTemplate.top2)
            //       if(newsletterTemplate.highlightB) highlight = await openTemplate(newsletterTemplate.highlightB)
            // if(newsletterTemplate.highlightB2) highlight2 = await openTemplate(newsletterTemplate.highlightB2)

              // if(newsletterTemplate.highlight) highlight = await openTemplate(newsletterTemplate.highlight2)
                    
        } else{
                
            template = await openTemplate(newsletterTemplate.template)
            
         if(newsletterTemplate.top) top = await openTemplate(newsletterTemplate.top)
             // if(newsletterTemplate.list) list = await openTemplate(newsletterTemplate.list)
             // if(newsletterTemplate.tv) tv= await openTemplate(newsletterTemplate.tv)
             // if(newsletterTemplate.happy) happy = await openTemplate(newsletterTemplate.happy)

        }

          // getRandomNewsletters();
       
       getNewslettersByDate()
       console.log("letter 1 ", letter1)
       console.log("letter 2 ", letter2)


        // otherNewsletter1 = await openTemplate(otherNewslettersList.guthealth)
        // otherNewsletter2 = await openTemplate(otherNewslettersList.integrative)

        otherNewsletter1 = await openTemplate(letter1)
        otherNewsletter2 = await openTemplate(letter2)

      
      
        template =  template.replace(new RegExp("{{other-newsletter-1}}", 'g'), otherNewsletter1);
        template =  template.replace(new RegExp("{{other-newsletter-2}}", 'g'), otherNewsletter2);
       


        if(newsletterTemplate.article)  article = await openTemplate(newsletterTemplate.article)
        if(newsletterTemplate.list) list = await openTemplate(newsletterTemplate.list)
        if(newsletterTemplate.tv) tv= await openTemplate(newsletterTemplate.tv)
        if(newsletterTemplate.happy) happy = await openTemplate(newsletterTemplate.happy)
        
        if(newsletterTemplate.opinion) opinion = await openTemplate(newsletterTemplate.opinion)
       
   
                                 
     if(newsletterTemplate.highlight) highlight = await openTemplate(newsletterTemplate.highlight)
            if(newsletterTemplate.highlight2) highlight2 = await openTemplate(newsletterTemplate.highlight2)
           
 

       

        
        
        if(newsletterTemplate.other) other = await openTemplate(newsletterTemplate.other)
        if(newsletterTemplate.first) first = await openTemplate(newsletterTemplate.first)

        
        if(newsletterTemplate.recommends) recommends = await openTemplate(newsletterTemplate.recommends)
         

        var surveyLinkFree= "https://survey.zohopublic.com/zs/XBDHsi"
        var surveyLinkPaid= "https://survey.zohopublic.com/zs/U8DHsh"
         var surveyLinkPaid2= "https://survey.zohopublic.com/zs/2bBThv"
        var surveyLinkCancel = "https://survey.zohopublic.com/zs/O3DH0h"
        // var surveyTextFree= "Welcome to the new Morning Brief! We'd love to hear your feedback, so please share your thoughts here or at the bottom of the newsletter."
        var surveyTextPaid= `
   Dear reader, your opinion matters. Please let us know how you like the Morning Brief newsletter, and we'll continue to make improvements based on your feedback.
        `

        var reactivateHtml =`<table class="mobile_full" id="other-news" width="600" align="center" style="table-layout:fixed;vertical-align:top;border-spacing:0;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;font-family:Inter,Arial,Sans-serif" cellpadding="0" cellspacing="0" role="presentation" valign="top"><tbody><tr class="cta"><td style="padding:20px 0px 20px 0px; display: block; width:100%; max-width: 600px; margin: auto;"><table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-radius: 0px"><tbody><tr><td style="mso-line-height: exactly;"><span style=""></span></td></tr><tr><td style="background:#EDEBE5;border-radius: 15px;padding-left:20px;padding-right:15px;padding-bottom:36px"><table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 600px; margin:0 auto; border-radius: 0px" align="center"><tbody><tr><td style="width:100%"><div style="height:8px;background:#B60000"></div></td></tr><tr><td class="mb_lh25 ctaTitle mb_fz24 mobile_plr16 mobile_pt30" style="mso-line-height:1.2;color: #333;text-align: center;text-align: center;padding-top:14px;padding-bottom:22px;"><div style="font-family: Georgia, Times;font-size:32px;font-style: normal;font-weight: 400;line-height:1.2;letter-spacing:-0.96px; text-align: center;">Your Subscription Has Expired</div></td></tr><tr><td align="center"><a class="hover-button mb_fz20 mobile_button" href="https://ca.theepochtimes.com/subscribe/reactivation?utm_source=MB_reactive_cta&amp;utm_medium=email&amp;utm_campaign=morningbrief-2024-04-10-ca&amp;src_tmp=reactive_cta" target="_blank" style="padding:5px 19px;color: #FFF; display: block; margin-left: auto; margin-right: auto; line-height: 40px;text-decoration: none;font-family: Roboto, Arial,sans-serif; font-weight: 700; color:#F7F7F7;font-size:24px;border-radius:99px;display:block;max-width:225px;text-align:center;border-radius: 99px;background:#B60000" align="center">Re-subscribe Now</a></td></tr><tr><td style="font-size: 16px;font-style: normal;font-weight: 400;line-height: 100%; letter-spacing: -0.16px;text-align:center;color:#666;font-family:Roboto;padding-top:6px">Cancel Anytime</td></tr></tbody></table><table role="presentation" cellpadding="0" style="margin:0 auto; border-radius: 0px; width:100%;margin-top:-10px"><tbody style="width:100%"><tr><td class="mobile_full mobile_mauto mobile_pt20" style="width:180px;text-align:center;display:inline-block;"><a href="https://ca.theepochtimes.com/subscribe/reactivation?&amp;src_tmp=reactive_cta" target="_blank" style="text-decoration:none;text-align: center"><img class="mobile_80" src="https://img.theepochtimes.ca/img/resubscribe-new-iphone-mockup-clean.png" style="transition: transform 0.3s ease-in-out; display: inline-block;width:100%" width="200"><div class="desktop_hide" style="text-align: center;width:100%;" border="0" cellspacing="0" cellpadding=""><div style="color:#B60000;text-align: center;font-family: Roboto, Arial,sans-serif;font-size: 24px;font-style: normal;font-weight: 500;line-height: 120%;letter-spacing: -0.48px;">Digital Deal</div><div style="color: #666;text-align: center;font-family: Roboto, Arial,sans-serif;font-size: 16px;font-style: normal;font-weight: 400;line-height: 120%; letter-spacing: -0.32px;margin-top:5px;">Plans as low as $1.33/week</div></div></a></td><td class="mobile_full mobile_mauto mobile_pt30" style="width:200px;text-align:center;display:inline-block;"><div style="background-color:black;width:calc(50% - 30px);height:0.5px;transform:translateY(-5px);display:inline-block"></div><div style="display:inline-block;margin-left:5px;margin-right:5px;font-size: 18px;font-style: normal;font-weight: 700;line-height: 100%; letter-spacing: -0.36px;font-family:Roboto, Arial,sans-serif;color:#666">OR</div><div style="background-color:black;width:calc(50% - 30px);height:0.5px;transform:translateY(-5px);display:inline-block"></div></td><td class="mobile_full mobile_mauto mobile_pt20" style="width:170px;text-align:center;display:inline-block;"><a href="https://ca.theepochtimes.com/subscribe/reactivation?&src_tmp=reactive_cta#print-69" target="_blank" style="text-decoration:none;"><img class="mobile_80" src="https://img.theepochtimes.ca/img/resubscribe-new-newspaper-mockup.png-clean2.png" style="width:100%;display: inline-block;" width="200"><div class="desktop_hide"><div style="color:#B60000;text-align: center;font-family: Roboto, Arial,sans-serif;font-size: 24px;font-style: normal;font-weight: 500;line-height: 120%;letter-spacing: -0.48px;">Print Newspaper Deal</div><div style="color: #666;text-align: center;font-family: Roboto, Arial,sans-serif;font-size: 16px;font-style: normal;font-weight: 400;line-height: 120%; letter-spacing: -0.32px;margin-top:5px">Print + All-Access Digital+ 2 FREE gifts</div></div></a></td></tr><tr><td class="mobile_full mobile_mauto" style="width:200px;text-align:center;display:inline-block;"><a href="https://ca.theepochtimes.com/subscribe/reactivation?&amp;src_tmp=reactive_cta" target="_blank" style="text-decoration:none;display:block" class="hover-div"><div class="mobile_hide" style="color:#B60000;text-align: center;font-family: Roboto, Arial,sans-serif;font-size: 24px;font-style: normal;font-weight: 500;line-height: 120%;letter-spacing: -0.48px;">Digital Deal</div><div class="mobile_hide" style="color: #666;text-align: center;font-family:Roboto, Arial,sans-serif;font-size: 16px;font-style: normal;font-weight: 400;line-height: 120%; letter-spacing: -0.32px;margin-top:5px;">Plans as low as $1.33/week<br><br></div></a></td><td class="mobile_full mobile_mauto" style="width:110px;text-align:center;display:inline-block;"></td><td class="mobile_full mobile_mauto" style="width:250px;text-align:center;display:inline-block;"><a href="https://ca.theepochtimes.com/subscribe/reactivation?&amp;src_tmp=reactive_cta" target="_blank" style="text-decoration:none;display:block" class="hover-div"><div class="mobile_hide" style="color:#B60000;text-align: center;font-family: Roboto, Arial,sans-serif;font-size: 24px;font-style: normal;font-weight: 500;line-height: 120%;letter-spacing: -0.48px;">Print Newspaper Deal</div><div class="mobile_hide" style="color: #666;text-align: center;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 120%; letter-spacing: -0.32px;margin-top:5px">Print + All-Access Digital<br>+ 2 FREE gifts</div></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>`



        // if(userType==="free"){
        //     includingPromo =true;
        //     template = template.replace(new RegExp("{{survey-link}}", 'g'), surveyLinkFree);

        // }else if(userType==="cancel"){
        //     template = template.replace(new RegExp("{{survey-link}}", 'g'), surveyLinkCancel);
        //     document.querySelector('textarea[name="promo-1"]').value = reactivateHtml;

        // }else{
             template = template.replace(new RegExp("{{survey-link}}", 'g'), surveyLinkPaid);
            // template = template.replace((new RegExp('{{survey-link}}')), surveyLinkPaid)
            //  template = template.replace((new RegExp('{{survey-link2}}')), surveyLinkPaid)
             template = template.replace((new RegExp('{{survey-text}}')), surveyTextPaid)
        // }

      


	

        var content = {}

        // var activeSection = document.querySelector(`.${newsletter}`)
        // console.log(document.querySelector(`.${newsletter}`))
        var form = document.querySelector('form')

        var data = new FormData(form);

        


        // Function to remove inactive sections
        function removeInactiveSections() {
            // Find all inactive sections within the form
            var inactiveSections = form.querySelectorAll(`.newsletter-ca:not(.${newsletter})`);
            
            // Store inactive sections for potential restoration
            var removedSections = [];
            inactiveSections.forEach(section => {
                // Store information needed for restoration
                removedSections.push({parent: section.parentNode, section: section});
                // Remove the section from the DOM
                section.parentNode.removeChild(section);
            });
            
            return removedSections;
        }

        // Function to restore inactive sections
        function restoreInactiveSections(removedSections) {
            removedSections.forEach(item => {
                item.parent.appendChild(item.section);
            });
        }

        // Example usage
        newForm = removeInactiveSections();
   
        template = template.replace((new RegExp('{{today-date}}')), getFormattedTomorrow())

        template = template.replace((new RegExp('{{day-of-week}}')), getDayOfWeek())

       
         template = template.replace(new RegExp("{{date}}", 'g'), getTomorrowDate());

         template = template.replace(new RegExp('{{td-yymmdd}}', 'g'), getTodaysDateInDDMMYY())

        function getDayOfWeek() {
         const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const today = new Date().getDay();
            const nextDayIndex = (today + 1) % 7;
            return daysOfWeek[nextDayIndex];
        }





        const keyHandlers = {

       
          'content-':contentMake,
          'promo-':promoMake,
          'copy-': renderCopy,
          'article-': 'article',
          'opinion-': 'opinion',
          'tv-': 'tv',
          'other-': 'other',
          "top-":"top",
          "highlight-":"highlight",
          "highlight2-":"highlight2",
          "list-":"list",
          "first-":"first",
          "recommends-":"recommends",
          "happy-":"happy"

        };

        // top = contentMake(key,data.get(key))

        console.log("data",data )



        for (const key of data.keys()) {
            // console.log("print the key",key)
          for (const prefix in keyHandlers) {
            if (key.includes(prefix)) {
              const handler = keyHandlers[prefix];
              if (typeof handler === 'function') {
                handler(key, data.get(key));
              } else {
                await getArticle(data.get(key), key, renderPost, handler);
              }
              break;
            }
          }
        }

        // if(lastElementRemoved){
        //         //remove the code
        //       }
        const minifyOptions = {
            includeAutoGeneratedTags: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortClassName: true,
            useShortDoctype: true,
            collapseWhitespace: true
        }

		
        template = template.replace((new RegExp('\{\{.*?\}\}', "g")), '')

        document.querySelector('#result').value = minify(template, minifyOptions).replace(/(\s)\s+/g, "$1")

        document.querySelector('iframe').contentWindow.document.open()
        document.querySelector('iframe').contentWindow.document.write(minify(template, minifyOptions).replace(/(\s)\s+/g, "$1"))
        


    }
})

function waitOn() {
    document.querySelector('.spinner').className += ' wait'
}

function waitOff() {
    document.querySelector('.spinner').className = 'spinner'
}

function renderCopy(key, copy) {
    template = template.replace((new RegExp('\{\{' + key + '\}\}', "g")), copy)
}


    function promoMake(key, copy) {
        promoCheckbox = document.querySelector('input[name="promo-check"]');

        if(promoCheckbox.checked){
            renderCopy(key, copy)
        }
        // for (var key in c)
        //     if (key.includes('promo-'))
        //         promo = promo.replace((new RegExp('\{\{' + key + '\}\}', "g")), c[key])

        // return promo
    }


    function contentMake(key, copy) { 
        // console.log("the key is ", key)
        // console.log("the copy is ",copy)

        // for (var key in c) 
            if(key.includes('content-text'))
                template = template.replace((new RegExp('\{\{'+key+'\}\}',"g")), copy)
        // return top

    }
    


function getFormattedTomorrow() {
  const options = { year: 'numeric', month: 'long', day: '2-digit' };
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // Add 1 day to get tomorrow's date
  const formattedTomorrow = tomorrow.toLocaleDateString('en-US', options);
  return formattedTomorrow;
}


async function renderPost(key, post,type) {




      const typeToFunction = {
          article: makeArticle(article, post),
          opinion: makeArticle(opinion, post),
          tv: makeArticle(tv, post),
          other: makeArticle(other, post),
          top: makeArticle(top, post),
          highlight: makeArticle(highlight, post),
          highlight2: makeArticle(highlight2, post),
          list:makeArticle(list, post),
              first:makeArticle(first, post),
              recommends:makeArticle(recommends, post),
              happy:makeArticle(happy, post),

      };

   
    if (type in typeToFunction) {

      template = template.replace(new RegExp('{{' + key + '}}', 'g'), typeToFunction[type]);

    }

    waitOff()




    function makeArticle(articleType, post) {
      if (!post) return '';


      // if (articleType ==="top"){
      //   console.log("top html is ", top)
      // }

      const replacements = {
        '{{article-link}}': post.url,
        '{{article-title}}': post.title,
        '{{article-author}}': post.author,
        '{{three_word_from_title}}': post.first_three_word,
        '{{utm}}': post.utm,
        '{{date}}': getTomorrowDate(),
        '{{author-img}}': post.authorImage,
        '{{trackingName}}': post.trackingName,
        '{{article-img}}': post.img,
        '{{image_caption}}': post.image_caption,
       '{{author-url}}': post.authorUrl,
       '{{categories}}':post.categories,
       // '{{utmContent}}':post.utmContent ,
       '{{alt}}':post.alt 

      };

      let result = articleType;

      for (const [placeholder, value] of Object.entries(replacements)) {
        result = result.replace(new RegExp(placeholder, 'g'), value);
      }

      return result;
    }



}
async function openTemplate(filepath) {


    let r = await fetch(filepath).then(response => response.text())
    return r
}
async function getArticle(url, key, callback,type) {
    if (!url) {

        template = template.replace((new RegExp('\{\{' + key + '\}\}', "g")), '')
        return null

    }
    await loadHTML(url, key, callback,type)
    return

}



async function loadHTML(url, key, renderFunction,type) {
    try {
        let cleanUrl = (new URL(url)).pathname;
        let id = cleanUrl.trim().match(/\d+$/)[0];
        
        const data = await fetch('https://api.theepochtimes.com/epoch/eet/v1/get_single_post_go?id=' + id).then(response => response.json());
        var newTitle = customizedTitle(key)

            var title =newTitle?newTitle: data.title;
             var authorImage = "";
             var authorUrl = ""
             var categories="";
             var alt=""

             alt= getAlt(key)
             




            // var utmContent = key;
            //  function updateUTM(utm, listOfArticles) {
            //     // Check if the utm value exists as a key in listOfArticles
            //     if (listOfArticles.hasOwnProperty(utm)) {
            //         // If so, update utm to the value associated with that key
            //         utm = listOfArticles[utm];
            //     }
            //     // Return the possibly updated utm value
            //     return utm;
            // }

            // utmContent=updateUTM(utmContent, listOfArticles)


            if(data.author[0].avatar_url) authorImage = data.author[0].avatar_url;
            // console.log("author url", authorImage)
            if(data.author[0].page_link) authorUrl = data.author[0].page_link;
            categories = data.categories?.[0]?.name ?? "";
           
            // if(data.categories[0].name && type==="article") categories = data.categories[0].name;


            let myTags = "";

            // if (typeof categories !== 'undefined' && categories !== null && categories.length > 0) {
            //     myTags = categories.slice(0, 4).map(category => category.name).join(" • ");
            // }
            // console.log("myTags is ",myTags);
            const content = data.api_content;
            const img = data.thumbnail;
            parser = new DOMParser()
            const html = parser.parseFromString(content, "text/html");
            var first_three_word = html.querySelector("p").innerText;
            first_three_word = truncateStringByWords(first_three_word, 50);
            var userStatus = includingPromo?"free":"paid";
            // var abTesting= includingPromo?"_BH2":"_new"
         
            // var trackingName = (newsletter==="sevenDays")?"sevenDays":"epochTV_"
            var trackingName = listOfUtms[newsletter]
            if(data.featured_image_caption) {var image_caption =  data.featured_image_caption
                image_caption =getWordsInsideParentheses(image_caption)
            }



            var utm = "&utm_source="+ trackingName +userStatus;
             // if(newsletter==="morningbrief"||newsletter==="weekendbrief"){
                
             //    utm = utm + abTesting
             // }
           

        // ... your existing code ...

        if(newsletter==="epochTV")var authorElement = await makeAuthor(url, key);
        // var authorElement = await makeAuthor(url, key);
        var author = authorElement?authorElement :data.author[0].name;
        if (author==="Documentaries")author ="Documentary";


        
        renderFunction(key, {
            url,
            img,
            title,
            author,
            first_three_word,
            utm,
            categories,
            // myTags,
            trackingName,
            authorImage,
            image_caption,
            authorUrl,
           alt
        },type);
    } catch (error) {
        console.error("Error fetching or rendering data:", error);
    }
}




async function makeAuthor(url, key){
    if(!url) return null

    let dom = await getSourceAsDOM(url)
    let authorNewElement= ""
    
    if (dom && dom.querySelector("#next_etv_video_sidebar_mobile_rental_btn")){

        authorNewElement = dom.querySelector("#next_etv_video_sidebar_mobile_rental_btn")
            .nextElementSibling
            .querySelectorAll('a')[1];
    }

        let authorNew = authorNewElement ? authorNewElement.textContent : null;

      return  authorNew
    
        

     async function getSourceAsDOM(url) {
        parser = new DOMParser()
        let dom = await loadHTMLHere(url)
        return parser.parseFromString(dom,"text/html");     
    }
 

}


async function loadHTMLHere(url) {
    let r = await fetch(url).then(response => response.text())
    return r
}



function truncateStringByWords(inputString, wordLimit) {
  const words = inputString.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return inputString;
}



function radioActions(){
        
           var radioButton = document.querySelectorAll('input[name="newsletter"]');
        
           radioButton.forEach(el => el.addEventListener("click", e => {

                newsletter  = e.target.id;
                if(newsletter.includes("brief")){
                    document.querySelector("input[name='copy-date']").classList.add("hide");
                    if(newsletter!="oldbrief"){
                         document.querySelector("#editor-message").classList.remove("hide");
                    }
                   
                }

                newsletterTemplate = templateList[newsletter]


               var targetSection = document.querySelector("."+newsletter);
       


                let siblings = document.querySelectorAll(".newsletter-ca")
                for(let sib of siblings) {
                sib.classList.remove("active")
                }
                // var newsletterTemplate = templateList["sevenDay"];
               targetSection.classList.add("active");

        
         }));  
}


function abTestingAction(){

           var radioButton = document.querySelectorAll('input[name="abTesting"]');
           radioButton.forEach(el => el.addEventListener("click", e => {

             version  = e.target.id;
            
                             
         })); 

}


function userTypeAction(){

           var radioButton = document.querySelectorAll('input[name="userType"]');
           radioButton.forEach(el => el.addEventListener("click", e => {

             userType  = e.target.id;
            checkPromoCheckbox(userType)
                             
         })); 

           
}


function getWordsInsideParentheses(inputString) {
  const regex = /\((.*?)\)/g;
  const matches = inputString.match(regex);

  if (matches) {
    const wordsInsideParentheses = matches.map(match => match.replace(/\(|\)/g, '').trim());
    return wordsInsideParentheses;
  }

  return [];
}


    function getTomorrowDate() {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // Add 1 day to get tomorrow's date
  
  var dd = String(tomorrow.getDate()).padStart(2, '0');
  var mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); // January is 0!
  var yyyy = tomorrow.getFullYear();
  
  return yyyy + "-" + mm + "-" + dd;
}


function getTodaysDateInDDMMYY() {
  const today = new Date();
  let day = today.getDate().toString().padStart(2, '0');
  let month = (today.getMonth() + 1).toString().padStart(2, '0'); // JavaScript months are 0-based
  let year = today.getFullYear().toString().slice(-2);
  
  return year+ month+day ;
}


function getAlt(key){
      if(document.querySelector(`[name="${key}"]`)) 

        {const element = document.querySelector(`[name="${key}"]`);
            // console.log("element is", element)

       if(element && element.hasAttribute('alt')) {
                // Get the alt attribute value\

            const alt = element.getAttribute('alt');
            // console.log("alt is", alt)
             return alt
            // Optionally, you can pair this with the element's name or value
        }
    }
}

function customizedTitle(key){
    if(document.querySelector(`[name="${key}"]`)) 

        {const element = document.querySelector(`[name="${key}"]`);
            // console.log("element is", element)

       if(element && element.hasAttribute('content')) {
                // Get the alt attribute value\

            const content = element.getAttribute('content');
            // console.log("alt is", alt)
             return content
            // Optionally, you can pair this with the element's name or value
        }
    }

}


function cleanUpData(formData) {
  // Keeping track of the highest index to add new items correctly
  let highestIndex = Object.keys(formData).reduce((max, current) => Math.max(max, parseInt(current)), 0);

  var breakHtml = "<br><span style='display:block;height:15px'></span>"
  Object.values(formData).forEach((item, index) => {
    // Existing rules for replacing Link with Headline
    if (item.id==="copy-editor-message"){
        item.Link = item.Content;
    }else if(item.id==="copy-title" || item.id==="copy-preheader") {
      item.Link = item.Headline;
    }else{
        formData[(highestIndex+1)] = {
        id: "copy-wise-person",
        Link: item.Headline
      };
    }
    // item.id !== "copy-word-of-wisdom"

    // Additional rules for creating new items based on specific item IDs
    const mappings = {
      "top-news-1": "content-text-1",
      "highlight-news-1": "content-text-2",
      "highlight2-news-1": "content-text-3",
      // "copy-word-of-wisdom":"copy-wise-person"
    };

    if (item.id in mappings) {
      // Prepare new item's properties

      const newItemId = mappings[item.id];
      item.Content=wrapImportantText(item.Content)
      var newItemLinkValue = item.Content; // Assuming item.Content exists

      let paragraphs = newItemLinkValue.trim().split(/\n+/);


      newItemLinkValue =  paragraphs.join(breakHtml);


      // Increment highestIndex to ensure a unique index for the new item
      highestIndex++;

      // Add new item to formData
      formData[highestIndex] = {
        id: newItemId,
        Link: newItemLinkValue
      };
    }
  });

  return formData;
}

function wrapImportantText(str) {
  // Regular expression to find "Why It Matters:"
  var pattern = /Why It Matters:/g;

  // Replace the matched text with wrapped text
  var updatedStr = str.replace(pattern, "<b>$&</b>");
  return updatedStr;
}


function updateFormInputs(formSelector, formData) {
  const form = document.querySelector(formSelector); // Select the existing form by its selector
  formData = cleanUpData(formData);
   checkForDuplicateLinks(formData);
  Object.values(formData).forEach(item => {
    // Query both input and textarea elements within the form that match the item's id as their name attribute
    const element = form.querySelector(`input[name="${item.id}"], textarea[name="${item.id}"]`);
    if (element) {
      // If a matching element is found, update its value with item.Link
      element.value = item.Link;

     if(item.Headline)element.setAttribute('content', item.Headline);
      
    }
  });

}

async function setupButtonClick() {
      const button = document.getElementById('fillForm');
      await fetchSheetData()
      if (button) {
        button.addEventListener('click', function() {

          updateFormInputs('form', globalSheetData); // Adjust 'form' if your form has a more specific selector

        });
      } else {
        console.error('Button with ID "fillForm" was not found.');
      }
    }

// Call setupButtonClick once the DOM is fully loaded to ensure the button is available
    document.addEventListener('DOMContentLoaded', setupButtonClick);
       
function checkForDuplicateLinks(formData) {
    const linksSet = new Set();
    let hasDuplicates = false;

    // Iterate over each item in the formData
    Object.values(formData).forEach(item => {
        // Skip empty links and do not consider them for duplication checks
        if (item.Link.trim() === "") {
            return; // Continue to next iteration if the link is empty
        }
        
        if (linksSet.has(item.Link)) {
            // If the Link is already in the set, it's a duplicate
            alert(`Duplicate link found: ${item.Link}`);
            hasDuplicates = true;
        } else {
            // Otherwise, add the Link to the set
            linksSet.add(item.Link);
        }
    });

}

function checkPromoCheckbox(userType) {
    // Find the checkbox input by its name
    var checkbox = document.querySelector('input[name="promo-check"]');

    // Check if the checkbox exists to avoid any errors
    if (checkbox) {
        // Check the checkbox if userType is 'free' or 'canceled'
        if (userType === "free" || userType === "cancel") {
            checkbox.checked = true;
        } else {
            // Optionally uncheck the box if the conditions are not met
            checkbox.checked = false;
        }
    } else {
        console.error('Checkbox with name "promo-check" not found.');
    }
}
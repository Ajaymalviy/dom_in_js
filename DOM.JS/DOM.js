// isme kuch nahi hai bas dom ka mtlb jo bhi html code hota h usko css par  print karana hota ha:
//by using these lines;;
document.getElementById('iske under id dena hota hai')
document.getElementsByClassName('iske under class ka name denahota h')
//id single object return karti h while class or tag name jo hoti h multiple obj return karti h
document.getElementsByTagName(isme tag push kardo bas)
//iske alawa ek hota hai query selector jiski help se bhi ham kisi bhi id class ko find kar sakte hai
document.querySelector(#idname)
document.querySelector(.classname)
document.querySelectorall(class/tag)
document.querySelector(tagname)
//in sab se axcha hota hai ek $0 jiski help se apn direct element le sakte 
     //bas content ko select kar ke ye likh do[$0]

//lets talk about updating existance content::)
1:innerHeight.html
2:outerHeight.html
3:Text content 
4: inner Text
//we can set or get an element by inner .html and text content or inner-text:
//there is a no much different b/w text content and inner .text only inner.html does not show hidden content

//Adding new Element :
  document.createElement()
 let content=document. querySelector(koisi bhi class ya id de denge isme)//isse wo class khol dega
 let word= document.createElement( 'span') //this is for example;;
  //ye ek  span name ka tag wagera ban to gya <span> jo word name ke var me assign ho gya::
  //ab jo span banaya hai usko content me fit kardo bas to wo naya jud jayega 
  content.appendchild(word);
  //0r hn jo bhi naya code add hoga wo last me jakr add hoga na ki bich


  //CREATING TEXT NOTE:
  let x=document.createElement('p') 
  let y=document.createTextNode('dom')
  x=appendchild(y)
 content :append(x)
 //another way to declear the same thing
  let mypara=document.createElement('p')
   mypara.textContent='it is just easy way t0 create node'
   content.appendchild(mypara)//ye wala aasa h as compaire to upper wala:
//is upper wali method se ham sirf lst me hi add karwa sakte h not by our choice then it can handel by below sol^n:

   //INSERTADJACENT.HTML()
   [2adj]//ye teen batein yaad rakhni h:
   [location/postion]-->where
   [html/text content] -->what

   //ese kar sakte hai apn isko  ::-> ye char jagah banta hai                                                   
             //before begin after begin 
             //before end after end:
             
             
   let para =createElement('h3')//se naya h3 ban gya
   para.textContent='isme kkuch bhi add kardo tag ke aas-pass'
   content.insertAdjucentelement('beforebegin',para)
   content.insertAdjucentelement('afterbegin',para)
   content.insertAdjucentelement('beforend',para)
   content.insertAdjucentelement('afterend',para)


   //jese add kiya hai wese hi remve bhi kar sakte hai::
   //bas uska rule hai ek ki apn ko parent pata hona chahiye"

   //lets see:
      parent.remove(childnode)  //queryselect-->for naya var banao then -->remove krdo
   //but isme ham parent ko sahi se nahi recognize kiya to glt ho jayega:so isko bhul jao niche wala achcha hai
   child.parent.remove(childnode);
   
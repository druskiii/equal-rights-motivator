import React from 'react';
import './App.css';

let quoteArray = [
  {quote: "You can’t eat beauty, it doesn’t sustain you. What is fundamentally beautiful is compassion for yourself and those around you. That kind of beauty inflames the heart and enchants the soul.", author: "Lupita Nyong’o"},
  {quote: "In societies where men are truly confident of their own worth, women are not merely tolerated but valued.", author: "Aung San Suu Kyi"},
  {quote: "Democracy is the best revenge.", author: "Benazir Bhutto" },
  {quote: "I am an example of what is possible when girls from the very beginning of their lives are loved and nurtured by people around them. I was surrounded by extraordinary women in my life who taught me about quiet strength and dignity.", author: "Michelle Obama" },
  {quote: "Think like a queen. A queen is not afraid to fail. Failures is another steppingstone to greatness.", author: "Oprah Winfrey" },
  { quote: "Each time a woman stands up for herself without knowing it possibly, without claiming it, she stands up for all women.", author: "Maya Angelou" },
  { quote: "I’m not black and i’m not white and i’m not pink and i’m not green. Eartha Kitt has no color and that is how barriers are broken.", author: "Eartha Kitt" },
  { quote: "Let us remember: one book, one pen, one child, and one teacher can change the world.", author: "Malala Yousafzai" },
  { quote: "For me, the only advice I ever give women is we want to support each other without distracting each other. Heads down, work really hard, pretend your locked you in your room or whatever, and just do your work.", author: "Mindy Kaling" },
  { quote: "You can be a thousand different women. It’s your choice which one you want to be. It’s about freedom and sovereignty. You celebrate who you are. You say, ‘This is my kingdom.", author: "Salma Hayek" },
  { quote: "You’ve gotta do things that make you happy. As women, we tend to give away a lot. We take care of a lot of people, and we can’t forget to take care of ourselves.", author: "Jennifer Lopez" },
  { quote: "Men often say that women change their minds too much. I say they sometimes don’t change them enough. I mean changing their state of mind, their attitudes, their outlook, their expectations, their consciousness – most of all, about themselves and what is possible in their lives.", author: "Julia Alvarez" },
  { quote:  "I am a feminist, and what that means to me is much the same as the meaning of the fact that I am black; it means that I must undertake to love myself and to respect myself as though my very life depends upon self-love and self-respect.", author: "June Jordan" },
  { quote: "I am not free while any woman is unfree, even when her shackles are very different from my own.", author: "Audre Lorde" },
  { quote: "You may not control all the events that happen to you, but you can decide not to be reduced by them", author: "Maya Angelou" },
  { quote: "There’s really no such thing as the ‘voiceless’. There are only the deliberately silenced, or the preferably unheard.", author: "Arundhati Roy" },
  { quote: "You get in life what you have the courage to ask for.", author: "Oprah Winfrey" },
  { quote: "You tell me to quiet down ’cause my opinions make me less beautiful, but I was not made with a fire in my belly so I could be put out. I was not made with a lightness on my tongue so I could be easy to swallow. I was made heavy half blade and half silk—difficult to forget and not easy for the mind to follow.", author: "Rupi Kaur" },
  { quote: "I was built this way for a reason, so I’m going to use it", author: "Simone Biles" },
  { quote: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
  { quote: "It was when I realized I needed to stop trying to be somebody else and be myself, I actually started to own, accept and love what I had.", author: "Tracee Ellis Ross" },
  { quote: "What I know for sure is that speaking your truth is the most powerful tool we all have.", author: "Oprah Winfrey"  },
  { quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", author: "Maya Angelou" },
  { quote: "You may not always have a comfortable life and you will not always be able to solve all of the world’s problems at once but don’t ever underestimate the importance you can have because history has shown us that courage can be contagious and hope can take on a life of its own.", author: "Michelle Obama" },
  { quote: "I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.", author: "Rosa Parks" },
  { quote: "Dreams are lovely. But they are just dreams. Fleeting, ephemeral, pretty. But dreams do not come true just because you dream them. It’s hard work that makes things happen. It’s hard work that creates change.", author: "Shonda Rhimes" },
  { quote: "Your willingness to look at your darkness is what empowers you to change.", author: "Iyanla Vanzant" },
  { quote: "Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.", author: "Chimamanda Ngozi Adichie" },
  { quote: "Always stay true to yourself and never let what somebody else says distract you from your goals.", author: "Michelle Obama" },
  { quote: "Whenever you take a step forward, you are bound to disturb something.", author: "Indira Gandhi" },
  { quote: "To fly, we have to have resistance.", author: "Maya Lin" },
  { quote: "The key is falling in love with something, anything. If your heart’s attached to it, then your mind will be attached to it.", author: "Vera Wang" },
  { quote: "We realize the importance of our voices only when we are silenced.", author: "Malala Yousafzai" },
  { quote: "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.", author: "Oprah Winfrey" },
  { quote: "You have to remember the value of your individuality – that you have something special and different to offer that nobody else can.", author: "Jennifer Lopez"},
  { quote: "I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.", author: "Rosa Parks" },
  { quote: "Winning is great, sure, but if you are really going to do something in life, the secret is learning how to lose. Nobody goes undefeated all the time. If you can pick up after a crushing defeat, and go on to win again, you are going to be a champion someday.", author: "Wilma Rudolph" },
  { quote: "Don't wait around for other people to be happy for you. Any happiness you get you've got to make yourself.", author: "Alice Walker" },
  { quote: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.", author: "Maya Angelou" },
  { quote: "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.", author: "Audre Lorde" },
  { quote: "Greatness is not measured by what a man or woman accomplishes, but by the opposition he or she has overcome to reach his goals.", author: "Dorothy Height" },
  { quote: "You don't make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.", author: "Shirley Chisholm" },
  { quote: "You know, you do need mentors, but in the end, you really just need to believe in yourself.", author: "Diana Ross" },
  { quote: "Hate is too great a burden to bear. It injures the hater more than it injures the hated.", author: "Coretta Scott King" },
  { quote: "Never underestimate the power of dreams and the influence of the human spirit. We are all the same in this notion: The potential for greatness lives within each of us.", author: "Wilma Rudolph" },
  { quote: "I define joy as a sustained sense of well-being and internal peace – a connection to what matters.", author: "Oprah Winfrey" },
  { quote: "You can fall, but you can rise also.", author: "Angelique Kidjo" },
  { quote: "I am obsessed with becoming a woman comfortable in her skin.", author: "Sandra Cisneros" },
  { quote: "Feet, what do I need them for if I have wings to fly?", author: "Frida Kahlo" },
  { quote: "I believe in the fire of love and the sweat of truth.", author: "Assata Shakur" },
  { quote: "I love to see a young girl go out and grab the world by the lapels. Life’s a bitch. You’ve got to go out and kick ass.", author: "Maya Angelou" },
  { quote: "When I dare to be powerful—to use my strength in the service of my vision—then it becomes less and less important whether I am afraid.", author: "Audre Lorde" },
  { quote: "You wanna fly…you got to give up the sh*t that weighs you down.", author: "Toni Morrison" },
  { quote: "Don’t plan it all. Let life surprise you a little.", author: "Julia Alvarez" },
  { quote: "Pack a pillow and blanket, and see as much of the world as you can. You will not regret it.", author: "Jhumpa Lahiri" },
  { quote: "When you can’t find someone to follow, you have to find a way to lead by example.", author: "Roxanne Gay" },
  { quote: "Forgiveness and faith are like writing a story; they take time, effort, revisions.", author: "Daisy Hernandez" },
  { quote: "I shall plant my hands in the garden. And I will grow", author: "Forough Farrokhzad" },
  { quote:  "My alone feels so good. I’ll only have you if you’re sweeter than my solitude.", author: "Warsan Shire" },
  { quote: "Why do you have to choose what type of woman you are? Why do you have to label yourself anything?", author: "Beyonce Knowles" },
  { quote: "I’ve come to believe that each of us has a personal calling that’s as unique as a fingerprint—and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service, working hard, and also allowing the energy of the universe to lead you.", author: "Oprah Winfrey" },
  { quote: "A strong woman understands that the gifts such as logic, decisiveness, and strengths are just as feminine as intuition and emotional connection. She values and uses all of her gifts.", author: "Nancy Rathburn" },
  { quote:
      "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.", author: "Madeleine Albright" },
  { quote: "Love is what we were born with. Fear is what we learned here.", author: "Marianne Williamson" },
  { quote: "We can do no great things, only small things with great love.", author: "Mother Teresa" },
  { quote: "Do you really want to look back on your life and see how wonderful it could have been had you not been afraid to live it?", author: "Caroline Myss" },
  { quote: "Women are never stronger than when they arm themselves with their weaknesses.", author: "Madame Marie du Deffand" },
  { quote: "Life shrinks or expands in proportion to one’s courage.", author: "Anais Nin" },
  { quote:  "You cannot get through a single day without having an impact on the world around you. What you do makes a difference, and you have to decide what kind of difference you want to make.", author: "Jane Goodall" },
  { quote: "The question isn’t who’s going to let me; it’s who is going to stop me.", author: "Ayn Rand" },
  { quote: "The most common way people give up their power is by thinking they don’t have any.", author: "Alice Walker" },
  { quote: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
  { quote: "There came a time when the risk to remain tight in the bud was more painful than the risk it took to blossom.", author: "Anais Nin" },
  { quote: "There are two ways of spreading light. To be the candle, or the mirror that reflects it.", author: "Edith Wharton" },
  { quote: "The thing that is really hard, and really amazing, is giving up on being perfect and beginning the work of becoming yourself.", author: "Anna Quindlen" },
  { quote: "When someone shows you who they are, believe them the first time.", author: "Maya Angelou" },
  { quote: "The truth will set you free. But first, it will piss you off.", author: "Gloria Steinem" },
  { quote: "Nobody’s going to save you. No one’s going to cut you down, cut the thorns thick around you. No one’s going to storm the castle walls nor kiss awake your birth, climb down your hair, nor mount you onto the white steed. There is no one who will feed the yearning. Face it. You will have to do, do it yourself.", author: "Gloria Anzaldua" },
  { quote: "I was going to die, sooner or later, whether or not I had even spoken myself. My silences had not protected me. Your silences will not protect you… We have been socialized to respect fear more than our own need for language.", author: "Audre Lorde" }
];

class App extends React.Component {
constructor(props){
  super(props);
  let quote1 = this.getRandomQuote(quoteArray);
  this.state = {
    currentQuote: quote1.quote,
    currentAuthor: quote1.author,
  };
  this.randomize = this.randomize.bind(this);
  this.getRandomQuote = this.getRandomQuote.bind(this);
  this.statelyQuote = this.statelyQuote.bind(this);
}
randomize(array) {
  return Math.floor(Math.random() * array.length);
}  

getRandomQuote(array){
  return array[this.randomize(array)];
}

statelyQuote(){
  let newQuote = this.getRandomQuote(quoteArray);
  this.setState({
    currentQuote: newQuote.quote,
    currentAuthor: newQuote.author,
  });
}

render(){
  return (
    <React.Fragment>
     <html>
     <body>  
    <div id="quote-box">
    <div id="text"><i class="fa fa-quote-left"></i>   {this.state.currentQuote}  <i class="fa fa-quote-right"></i><p><br></br></p>
      <div id="author">- {this.state.currentAuthor}
        <div className="row">
          <div className="column" id="twitter"><a id="tweet-quote" href="https://twitter.com/intent/tweet"><i class="fa fa-twitter fa-lg"></i></a></div>
          <div className="column" id="qoute-button"><button id="new-quote" onClick={this.statelyQuote}><i class="fa fa-paper-plane"></i> One More Quote!</button></div> 
      </div>
      </div>
    </div>
  </div> 
  </body>
   <div class="footer">by <a href="https://codepen.io/collection/gYROeO"><em>Dru Baker</em></a></div>
  </html> 
 </React.Fragment>     
  );
}
}

export default App;

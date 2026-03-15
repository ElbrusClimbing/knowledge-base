const questions = {
  en: [
    {
      id: 1,
      type: 'single',
      text: 'During your first 3 months you are learning \u2014 studying the product and scripts, closing very few deals, earning minimal income. What will motivate you MOST during this period?',
      options: [
        { label: 'a', text: 'Support from the team and manager \u2014 the working atmosphere is important to me' },
        { label: 'b', text: 'Knowing that my efforts now will lead to income in 3\u20136 months' },
        { label: 'c', text: 'In the first months motivation will naturally be lower \u2014 that is a normal period' },
        { label: 'd', text: 'I find the product and the topic interesting \u2014 I want to learn it well' },
        { label: 'e', text: 'I want to prove to myself that I can do this \u2014 professional growth matters to me' }
      ]
    },
    {
      id: 2,
      type: 'single',
      text: 'A client sends their first message: "How much does it cost to climb Elbrus?" What reply would you send?',
      options: [
        { label: 'a', text: '"Hi! Everything is described in detail on our website \u2014 programmes and prices: [link]. There you can see the dates and prices for different trips, it is very clear. If you have any questions, please feel free to reach out! I am available for any questions."' },
        { label: 'b', text: '"Hello! Our tour prices range from 1,140 to 2,500 EUR depending on the programme. If you have any further questions \u2014 write to me, I will be happy to help! :)"' },
        { label: 'c', text: '"Hi! We have several programmes, starting from 1,140 EUR. This includes accommodation, meals, guides, and acclimatisation. What dates are you considering?"' },
        { label: 'd', text: '"Hi! Could you tell me which route interests you and what dates you are looking at? We have several programmes \u2014 I will find the best option for you and send the price with a description."' }
      ]
    },
    {
      id: 3,
      type: 'single',
      text: 'A deal has the status "Awaiting payment". 5 days have passed and the client has not paid. What do you do?',
      options: [
        { label: 'a', text: 'Wait a couple more days \u2014 everything has already been discussed, and I should not be too pushy.' },
        { label: 'b', text: 'Move the deal back to the previous stage \u2014 the client probably has not made a final decision and more work is needed.' },
        { label: 'c', text: 'Write to the client: "Hi! I wanted to check \u2014 is everything OK with the payment? Did any questions come up, or do you need any help?" If they do not reply \u2014 call them.' },
        { label: 'd', text: 'Resend the invoice with a short message reminding them about the payment.' }
      ]
    },
    {
      id: 4,
      type: 'single',
      text: 'Friday, 6:00 PM, end of the working day. A client writes with an urgent question \u2014 they want to book. What do you do?',
      options: [
        { label: 'a', text: 'Reply briefly to their question and say I will follow up in more detail on Monday' },
        { label: 'b', text: 'Try to stay in touch with them by phone, but fully return to work with them on Monday' },
        { label: 'c', text: 'Work with the client right now \u2014 at least until we reach some intermediate result' },
        { label: 'd', text: 'Forward the message to a colleague who is currently on duty' }
      ]
    },
    {
      id: 5,
      type: 'single',
      text: 'Given the choice: work with ready-made scripts or without them \u2014 relying on experience and intuition. What do you prefer?',
      options: [
        { label: 'a', text: 'I do not need scripts, I prefer to work independently \u2014 it is faster and more reliable' },
        { label: 'b', text: 'Depends on the situation \u2014 standard cases by script, non-standard ones in my own way' },
        { label: 'c', text: 'Scripts as a foundation, but with the ability to adapt them to each client' }
      ]
    },
    {
      id: 6,
      type: 'single',
      text: '11:00 PM, a client is in a panic \u2014 a problem with their visa, departure in 3 days. Your manager is not responding. What do you do?',
      options: [
        { label: 'a', text: 'Try to figure it out and help on my own' },
        { label: 'b', text: 'Tell them to call the visa centre themselves in the morning' },
        { label: 'c', text: 'Calm them down, gather the details, send a detailed message to the manager \u2014 so they can act immediately in the morning' },
        { label: 'd', text: 'This is not my area \u2014 visas are handled by another department' }
      ]
    },
    {
      id: 7,
      type: 'single',
      text: 'A client wants to book a difficult tour, but their preparation is most likely not sufficient. What do you do?',
      options: [
        { label: 'a', text: 'If the instructions allow selling this tour to this client, then I sell it \u2014 the rest is not my responsibility' },
        { label: 'b', text: 'Carefully ask about their preparation and give recommendations \u2014 the decision is theirs' },
        { label: 'c', text: 'Honestly share my concerns and suggest a more suitable route' },
        { label: 'd', text: 'Tell them the route is difficult and recommend they train more' }
      ]
    },
    {
      id: 8,
      type: 'single',
      text: 'Client: "Hi! I want to go to Elbrus in July. How much does it cost and what is included?" Which answer is BEST?',
      options: [
        { label: 'a', text: '"Hello! The price depends on the programme. A standard south-side ascent starts from 1,150 EUR. Other programmes cost more. Which programme are you interested in?"' },
        { label: 'b', text: '"Hello! Tour prices in July range from 1,150 to 3,650 EUR. Included: accommodation, meals, guides. Here is all the detailed information, available dates, and exact prices: [link]. If you have any questions, I will be happy to answer them."' },
        { label: 'c', text: '"Hi! In July we have many trips on different routes. Prices vary by programme. Do you want the simplest standard south-side route or something more interesting and challenging?"' },
        { label: 'd', text: '"Hi! July is a great time \u2014 the peak of the season! Are you going alone or with a group? Do you have mountain experience? I will find the best programme for you and send all the information."' }
      ]
    },
    {
      id: 9,
      type: 'single',
      text: 'Client: "I will think about it and come back in a couple of months." They are genuinely interested. What do you reply?',
      options: [
        { label: 'a', text: '"OK, no problem. But what if I offer you a discount if you book this week?"' },
        { label: 'b', text: '"In a couple of months there may be no places left in the group you need. What is stopping you from booking now?"' },
        { label: 'c', text: '"Of course, no problem. Just please keep in mind that with early booking the price is significantly lower. Are you sure you want to postpone this for 2 months?"' },
        { label: 'd', text: '"OK, I will be waiting! Get in touch when you are ready."' }
      ]
    },
    {
      id: 10,
      type: 'multi',
      text: 'Which of these books have you read? (select all that apply)',
      options: [
        { label: 'a', text: '"SPIN Selling" \u2014 Neil Rackham' },
        { label: 'b', text: '"The First Contact Formula" \u2014 Steven Barnes' },
        { label: 'c', text: '"How to Win Friends and Influence People" \u2014 Dale Carnegie' },
        { label: 'd', text: '"Never Split the Difference" \u2014 Chris Voss' },
        { label: 'e', text: '"The Seven Levels of Closing" \u2014 Marcus Lindberg' },
        { label: 'f', text: '"Customers for Life" \u2014 Carl Sewell' },
        { label: 'g', text: '"Way of the Wolf" \u2014 Jordan Belfort' },
        { label: 'h', text: '"The Art of the Impossible Deal" \u2014 Richard Mason' },
        { label: 'i', text: '"The Challenger Sale" \u2014 Matthew Dixon' },
        { label: 'j', text: '"45 Tattoos of a Salesman" \u2014 Maxim Batyrev' },
        { label: 'k', text: '"The Sale Starts with No" \u2014 Alexei Voronov' },
        { label: 'l', text: '"Start with No" \u2014 Jim Camp' },
        { label: 'm', text: 'I have not read any books on this topic' }
      ]
    },
    {
      id: 11,
      type: 'single',
      text: 'Choose the statement that describes you BEST:',
      options: [
        { label: 'a', text: 'I work better when I am told exactly what to do' },
        { label: 'b', text: 'I prefer complete freedom \u2014 rules hold me back' },
        { label: 'c', text: 'Depends on the task \u2014 instructions for routine work, freedom for non-standard tasks' },
        { label: 'd', text: 'I work better when I understand the goal and choose my own path' },
        { label: 'e', text: 'I need clear instructions but I want to understand why they exist' }
      ]
    },
    {
      id: 12,
      type: 'single',
      text: 'You have been working for 3 months. You know the product, you have scripts and instructions, but your conversion rate is still below average. What will you do?',
      options: [
        { label: 'a', text: 'The scripts are not a good fit \u2014 I need more freedom in how I communicate with clients' },
        { label: 'b', text: 'I should discuss it with my manager and ask for feedback' },
        { label: 'c', text: 'Perhaps I have just been getting difficult clients' },
        { label: 'd', text: 'I need to analyse my chats and calls \u2014 find out where I am losing clients' },
        { label: 'e', text: 'I need more time \u2014 results will come with experience' }
      ]
    },
    {
      id: 13,
      type: 'single',
      text: 'A client says: "I will think about it." What does this usually mean?',
      options: [
        { label: 'a', text: 'A standard phrase \u2014 I just need to follow up in a couple of days' },
        { label: 'b', text: 'It would be great to offer a discount or bonus to speed up the decision' },
        { label: 'c', text: 'They genuinely need time \u2014 I should respect that, wait, and not be pushy' },
        { label: 'd', text: 'Most likely there is an objection that the client has not voiced' }
      ]
    },
    {
      id: 14,
      type: 'single',
      text: 'You have 200 deals in CRM. 50 have not been updated in over a month. What do you do with them?',
      options: [
        { label: 'a', text: 'To use my time as efficiently as possible, I will prepare a message template and send it to all these clients, slightly adjusting the template and adding the client\'s name.' },
        { label: 'b', text: 'Set aside time, go through each of the 50 \u2014 review the conversation history, write a personalised message. Based on the result: whoever replies \u2014 bring back into active work; whoever does not \u2014 close with a stated reason.' },
        { label: 'c', text: 'Nothing needs to be done. If a deal has had no contact for a month, then each deal should already have a task set with a defined date for the next follow-up.' },
        { label: 'd', text: 'Sort by amount/potential. Write personally to the most promising ones, close the rest \u2014 there is no point spending equal time on everyone.' }
      ]
    },
    {
      id: 15,
      type: 'single',
      text: 'You are given a 15-page sales technique guide. Your reaction?',
      options: [
        { label: 'a', text: '15 pages is too much, I am unlikely to remember it all. Besides, it is much more important to feel the client than to follow instructions.' },
        { label: 'b', text: 'I will read it as needed \u2014 when I encounter a relevant situation' },
        { label: 'c', text: 'I will read it, but if something is unclear or seems illogical to me, I will ask questions' },
        { label: 'd', text: 'I will read the guide and try to follow all the instructions \u2014 if something is unclear, I will ask' }
      ]
    },
    {
      id: 16,
      type: 'single',
      text: 'A client asks a question that is not covered in the scripts. What do you do?',
      options: [
        { label: 'a', text: 'I answer as I see fit \u2014 the client is waiting, and speed of response is more important than exact wording' },
        { label: 'b', text: 'I find a similar situation in other scripts and adapt it. I let my manager know there is no script for this situation' },
        { label: 'c', text: 'I tell the client I will check and reply later \u2014 then ask my colleagues or manager' }
      ]
    },
    {
      id: 17,
      type: 'single',
      text: 'A client asks for a discount. According to the instructions, discounts are not offered. They insist and threaten to leave. What do you do?',
      options: [
        { label: 'a', text: 'I tell them I will try to arrange a personal discount with my manager and get back to them with an answer' },
        { label: 'b', text: 'I explain that discounts are not offered and highlight the value of what is included in our offer' },
        { label: 'c', text: 'I call my manager and ask whether an exception is possible in this case' },
        { label: 'd', text: 'I explain that discounts are not possible and offer additional value under certain conditions' }
      ]
    },
    {
      id: 18,
      type: 'single',
      text: 'A client asks about safety on a route. You do not know the answer. What do you do?',
      options: [
        { label: 'a', text: 'I say I will check and give an accurate answer within a specific timeframe' },
        { label: 'b', text: 'Right now the most important thing is to handle the client\'s concern about safety' },
        { label: 'c', text: 'Such a situation is unlikely to happen' },
        { label: 'd', text: 'I ask colleagues or search for the information online and reply to the client immediately' }
      ]
    },
    {
      id: 19,
      type: 'single',
      text: 'You have been talking to a client for a while, they were interested and almost ready to pay. You write to check in, and they say: "Hello, I have decided to postpone for now." Your next message:',
      options: [
        { label: 'a', text: '"I understand, get in touch when you are ready! I will be happy to help."' },
        { label: 'b', text: '"Hi! Sorry to hear that. I can offer special conditions if you book this week \u2014 would you like to discuss?"' },
        { label: 'c', text: '"Hi! Understood, no problem. Roughly when are you planning to come back to this? So I can follow up at the right time."' },
        { label: 'd', text: '"Hi! Could you clarify \u2014 have you decided to postpone for a specific period, or have you decided to drop the idea altogether?"' }
      ]
    },
    {
      id: 20,
      type: 'multi',
      text: 'Mark ALL films from the list that you have watched:',
      options: [
        { label: 'a', text: 'The Wolf of Wall Street' },
        { label: 'b', text: 'The Last Deal' },
        { label: 'c', text: 'Boiler Room' },
        { label: 'd', text: 'The Golden Call' },
        { label: 'e', text: 'Glengarry Glen Ross' },
        { label: 'f', text: 'The Pursuit of Happyness' },
        { label: 'g', text: 'The Closing' },
        { label: 'h', text: 'Jerry Maguire' },
        { label: 'i', text: 'The Social Network' },
        { label: 'j', text: 'Salesman\'s Second Chance' },
        { label: 'k', text: 'The Founder' },
        { label: 'l', text: 'Molly\'s Game' },
        { label: 'm', text: 'The Intern' },
        { label: 'n', text: 'I have not watched any films on this topic' }
      ]
    },
    {
      id: 21,
      type: 'ranking',
      text: 'Rank by importance (1 = most important, 5 = least important):',
      options: [
        { label: 'income', text: 'Income level' },
        { label: 'product', text: 'Interesting product' },
        { label: 'instructions', text: 'Clear instructions and structured processes' },
        { label: 'freedom', text: 'Independence and freedom' },
        { label: 'team', text: 'Friendly team' }
      ]
    },
    {
      id: 22,
      type: 'single',
      text: 'A new client submitted a callback request. You call them. What is the main goal of the first call?',
      options: [
        { label: 'a', text: 'Try to sell a tour' },
        { label: 'b', text: 'Explain all the details about our tours and suggest a suitable option' },
        { label: 'c', text: 'Introduce yourself, learn their name, answer their questions, and save all information in CRM' },
        { label: 'd', text: 'Find out what they need, how ready they are to buy, and whether they have any doubts' }
      ]
    },
    {
      id: 23,
      type: 'single',
      text: 'Monday morning: 15 unread messages, 3 tasks from your manager, 2 missed calls. What do you do FIRST?',
      options: [
        { label: 'a', text: 'Start with the tasks from my manager \u2014 those are the priority' },
        { label: 'b', text: 'Make a to-do list, set priorities, then start' },
        { label: 'c', text: 'Quickly scan all 15 messages and identify the urgent ones \u2014 then work by priority' },
        { label: 'd', text: 'Return the missed calls \u2014 if they called, it must be urgent' }
      ]
    },
    {
      id: 24,
      type: 'single',
      text: 'You notice that one script performs worse than the others. What do you do?',
      options: [
        { label: 'a', text: 'I respond in my own way, as I think is better' },
        { label: 'b', text: 'I keep using it as is \u2014 this is not my area of responsibility' },
        { label: 'c', text: 'I change the wording, and if it works \u2014 suggest the change' },
        { label: 'd', text: 'I let my manager know it performs poorly and suggest my own version' }
      ]
    },
    {
      id: 25,
      type: 'multi',
      text: 'How do you usually develop your sales skills? (select all that apply)',
      options: [
        { label: 'a', text: 'Books' },
        { label: 'b', text: 'Podcasts' },
        { label: 'c', text: 'YouTube / video courses' },
        { label: 'd', text: 'Paid courses and training' },
        { label: 'e', text: 'Conferences and webinars' },
        { label: 'f', text: 'Mentorship' },
        { label: 'g', text: 'Only hands-on experience \u2014 I learn by doing' }
      ]
    },
    {
      id: 26,
      type: 'single',
      text: 'What payment structure would you prefer?',
      options: [
        { label: 'a', text: 'High fixed salary and small bonuses' },
        { label: 'b', text: 'Fixed salary only, no bonuses' },
        { label: 'c', text: 'Small fixed salary + sales bonuses with a good commission rate' },
        { label: 'd', text: 'Sales bonuses only, no fixed salary \u2014 but a high commission rate' }
      ]
    },
    {
      id: 27,
      type: 'single',
      text: 'Client: "Your competitors are cheaper." Which response is the LEAST effective?',
      options: [
        { label: 'a', text: '"Let us compare what you get \u2014 and then you can decide what matters more to you: the difference in service or the difference in price."' },
        { label: 'b', text: '"That is not a problem. I think we can offer you a discount."' },
        { label: 'c', text: '"Yes, we are not the cheapest option. Did you check what exactly is included in their price?"' },
        { label: 'd', text: '"The company you are referring to is known for their extremely low level of service..."' }
      ]
    },
    {
      id: 28,
      type: 'single',
      text: 'You need to learn a database of 291 scripts. How do you approach it?',
      options: [
        { label: 'a', text: 'Read all 291 \u2014 I need to know each one' },
        { label: 'b', text: 'Ask for the 20\u201330 most common ones to be highlighted, learn the rest as needed' },
        { label: 'c', text: 'Read them as situations come up' },
        { label: 'd', text: 'Study the structure and learn how to quickly find the right script for each situation' }
      ]
    },
    {
      id: 29,
      type: 'single',
      text: 'You discussed an Elbrus tour with a client a year ago but have not been in contact since. Write the first message.',
      options: [
        { label: 'a', text: '"Hello! I wanted to ask whether an Elbrus ascent is still something you are considering? We are ready to offer you the best conditions this season."' },
        { label: 'b', text: '"Hello! We discussed an Elbrus ascent before. If your plans have not changed, I can tell you about what is new in this season\'s programme."' },
        { label: 'c', text: '"Hi! We spoke a year ago about Elbrus. Did you end up making the climb? Or is it still something you are interested in?"' },
        { label: 'd', text: '"Hi! We have started taking bookings for the next season. Early bookings get the best price. Below I will send the programme description and the trip schedule. If you have any questions, I will be happy to help! :)"' }
      ]
    },
    {
      id: 30,
      type: 'single',
      text: 'A new client writes: "I want to go to Elbrus." You have 5 programmes available. What do you send?',
      options: [
        { label: 'a', text: 'Suggest they look at the programmes on the website, because everything is presented there in detail with photos \u2014 and give them direct links to all 5 programmes' },
        { label: 'b', text: 'Briefly describe all five options and suggest they choose the one they like' },
        { label: 'c', text: 'Find out what kind of programme they are looking for and suggest the options that match their preferences' }
      ]
    },
    {
      id: 31,
      type: 'likert',
      text: 'I can easily work on one task for 4\u20135 hours straight.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 32,
      type: 'likert',
      text: 'I prefer to work the way I am used to.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 33,
      type: 'likert',
      text: 'When I take on a task, I see it through to the result.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 34,
      type: 'likert',
      text: 'I often switch between tasks \u2014 it is hard to stay on one thing for long.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 35,
      type: 'likert',
      text: 'I first understand the client\'s situation before making a suggestion.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 36,
      type: 'likert',
      text: 'I find it hard to start a boring task \u2014 I tend to put it off.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 37,
      type: 'likert',
      text: 'When processes change, I try to adapt quickly.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 38,
      type: 'likert',
      text: 'If a mistake is not my fault, I do not feel it is my job to fix it.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 39,
      type: 'likert',
      text: 'I usually finish one task before starting the next.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 40,
      type: 'likert',
      text: 'I get bored quickly with repetitive tasks.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 41,
      type: 'likert',
      text: 'I can easily handle a full 8-hour day working at a computer.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 42,
      type: 'likert',
      text: 'If a client is interested in a tour, I immediately tell them about all available options.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 43,
      type: 'likert',
      text: 'I can work on one task for a long time without losing focus.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 44,
      type: 'likert',
      text: 'I need variety during the day \u2014 otherwise I lose productivity.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 45,
      type: 'likert',
      text: 'I find it hard to sit in one place for long \u2014 I need movement.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    },
    {
      id: 46,
      type: 'likert',
      text: 'I often underestimate how long a task will take.',
      options: [
        { label: 0, text: 'Strongly disagree' },
        { label: 1, text: 'Rather no' },
        { label: 2, text: 'Rather yes' },
        { label: 3, text: 'Fully agree' }
      ]
    }
  ],
  ru: [
    {
      id: 1,
      type: 'single',
      text: 'Первые 3 месяца работы \u2014 вы учитесь, изучаете продукт и скрипты, закрытых сделок пока мало, доход минимальный. Что будет вас мотивировать БОЛЬШЕ ВСЕГО в этот период?',
      options: [
        { label: 'a', text: 'Поддержка команды и руководителя \u2014 для меня важна атмосфера' },
        { label: 'b', text: 'Понимание что мои усилия сейчас = доход через 3\u20136 месяцев' },
        { label: 'c', text: 'В первые месяцы мотивация в любом случае будет ниже, это нормальный период' },
        { label: 'd', text: 'Мне интересен продукт и тема \u2014 хочу в ней разобраться' },
        { label: 'e', text: 'Хочу доказать себе что могу \u2014 мне важен профессиональный рост' }
      ]
    },
    {
      id: 2,
      type: 'single',
      text: 'Клиент написал первое сообщение: \u00abСколько стоит подняться на Эльбрус?\u00bb Какой ответ вы бы отправили?',
      options: [
        { label: 'a', text: '\u00abПривет! У нас на сайте всё подробно расписано по программам и ценам: [ссылка]. Там вы можете увидеть и даты, и цены на разные заезды, это очень наглядно. И если будут вопросы, пожалуйста, обращайтесь! Я на связи по всем вопросам.\u00bb' },
        { label: 'b', text: '\u00abЗдравствуйте! Стоимость наших туров от 1140 до 2500 EUR в зависимости от программы. Если у Вас есть еще вопросы \u2014 пишите, с удовольствием отвечу! :)\u00bb' },
        { label: 'c', text: '\u00abПривет! У нас несколько программ, стоимость от 1140 EUR. Включает проживание, питание, гидов, акклиматизацию. Какие даты рассматриваете?\u00bb' },
        { label: 'd', text: '\u00abПривет! Подскажите, какой маршрут интересует и на какие даты? У нас несколько программ \u2014 подберу оптимальный вариант и скину цену с описанием.\u00bb' }
      ]
    },
    {
      id: 3,
      type: 'single',
      text: 'Сделка в статусе \u00abОжидание оплаты\u00bb. Прошло 5 дней, клиент не оплатил. Каковы ваши действия?',
      options: [
        { label: 'a', text: 'Подожду ещё пару дней \u2014 с клиентом уже все обсудили, и мне не следует быть слишком навязчивым.' },
        { label: 'b', text: 'Переведу сделку на предыдущую стадию \u2014 видимо клиент ещё не принял окончательное решение и требуется дополнительная работа.' },
        { label: 'c', text: 'Напишу клиенту: \u00abПривет! Хотел уточнить \u2014 всё ли в порядке с оплатой? Может возникли вопросы или нужна помощь?\u00bb Если не ответит \u2014 позвоню.' },
        { label: 'd', text: 'Отправлю повторный счёт с коротким сообщением и напоминанием об оплате.' }
      ]
    },
    {
      id: 4,
      type: 'single',
      text: 'Пятница, 18:00, конец рабочего дня. Клиент пишет срочный вопрос \u2014 хочет забронировать. Что сделаете?',
      options: [
        { label: 'a', text: 'Отвечу коротко на его вопрос и скажу что отвечу более подробно в понедельник' },
        { label: 'b', text: 'Постараюсь быть с ним на связи через телефон, но полноценно вернусь к работе с ним в понедельник' },
        { label: 'c', text: 'Полностью отработаю с клиентом прямо сейчас \u2014 пока не приду с ним по крайней мере к какому-то промежуточному результату' },
        { label: 'd', text: 'Перешлю коллеге который на связи и у которого сейчас рабочее время' }
      ]
    },
    {
      id: 5,
      type: 'single',
      text: 'Выбор: работать по готовым скриптам или без \u2014 на опыте и интуиции. Что предпочтёте?',
      options: [
        { label: 'a', text: 'Мне не нужны скрипты, предпочитаю работать самостоятельно \u2014 так быстрее и надёжнее' },
        { label: 'b', text: 'Зависит от ситуации \u2014 стандартные ответы по скрипту, нестандартные по-своему' },
        { label: 'c', text: 'Скрипты как основа, но с возможностью адаптировать под клиента' }
      ]
    },
    {
      id: 6,
      type: 'single',
      text: '23:00, клиент в панике \u2014 проблема с визой, вылет через 3 дня. Руководитель не отвечает. Что делаете?',
      options: [
        { label: 'a', text: 'Попробую сам разобраться и помочь' },
        { label: 'b', text: 'Скажу чтобы сам позвонил в визовый центр утром' },
        { label: 'c', text: 'Успокою, соберу детали, напишу руководителю подробное сообщение \u2014 утром сможет сразу действовать' },
        { label: 'd', text: 'Это не мой вопрос \u2014 визами занимается другой отдел' }
      ]
    },
    {
      id: 7,
      type: 'single',
      text: 'Клиент хочет забронировать сложный тур, но подготовка скорее всего недостаточна. Что делаете?',
      options: [
        { label: 'a', text: 'Если инструкции допускают продажу тура данному клиенту, то я продаю, остальное \u2014 не моя зона ответственности' },
        { label: 'b', text: 'Аккуратно спрошу про подготовку и дам рекомендации \u2014 решение за ним' },
        { label: 'c', text: 'Честно скажу о своих опасениях и предложу рассмотреть более подходящий маршрут' },
        { label: 'd', text: 'Скажу что маршрут сложный и порекомендую потренироваться' }
      ]
    },
    {
      id: 8,
      type: 'single',
      text: 'Клиент: \u00abПривет! Хочу на Эльбрус в июле. Сколько стоит и что входит?\u00bb Какой ответ ЛУЧШЕ?',
      options: [
        { label: 'a', text: '\u00abДобрый день! Стоимость зависит от программы. Стандартное восхождение с юга от 1150 EUR. Другие программы дороже. Вас какая программа интересует?\u00bb' },
        { label: 'b', text: '\u00abЗдравствуйте! Стоимость туров в июле от 1150 до 3650 EUR. Входит: проживание, питание, гиды. Вот здесь вся подробная информация, доступные даты и точные цены: [ссылка] Если у вас появятся вопросы, я с радостью на них отвечу.\u00bb' },
        { label: 'c', text: '\u00abПривет! В июле у нас много заездов по разным маршрутам. Цены на разные программы отличаются. Вы хотите самый простой стандартный маршрут с юга или что-то более интересное и сложное\u00bb' },
        { label: 'd', text: '\u00abПривет! Июль \u2014 отличное время, самый разгар сезона! Подскажите \u2014 один или с компанией? Есть опыт в горах? Подберу оптимальную программу и скину всю информацию.\u00bb' }
      ]
    },
    {
      id: 9,
      type: 'single',
      text: 'Клиент: \u00abПодумаю и вернусь через пару месяцев.\u00bb Реально заинтересован. Что ответите?',
      options: [
        { label: 'a', text: '\u00abХорошо, нет проблем. Но что если я предложу вам скидку если забронируете на этой неделе?\u00bb' },
        { label: 'b', text: '\u00abЧерез пару месяцев мест в нужной вам группе может уже и не быть. Что вам мешает забронировать сейчас?\u00bb' },
        { label: 'c', text: '\u00abКонечно, нет проблем. Только пожалуйста учти, что при раннем бронировании цена значительно ниже. Ты уверен что хочешь отложить это на 2 месяца?\u00bb' },
        { label: 'd', text: '\u00abХорошо, буду ждать! Обращайтесь когда будете готовы.\u00bb' }
      ]
    },
    {
      id: 10,
      type: 'multi',
      text: 'Какие из этих книг вы читали? (отметьте ВСЕ)',
      options: [
        { label: 'a', text: '\u00abСПИН-продажи\u00bb \u2014 Нил Рэкхем' },
        { label: 'b', text: '\u00abФормула первого контакта\u00bb \u2014 Стивен Барнс' },
        { label: 'c', text: '\u00abКак завоёвывать друзей\u00bb \u2014 Дейл Карнеги' },
        { label: 'd', text: '\u00abНикогда не идите на компромисс\u00bb \u2014 Крис Восс' },
        { label: 'e', text: '\u00abСемь уровней закрытия\u00bb \u2014 Маркус Линдберг' },
        { label: 'f', text: '\u00abКлиенты на всю жизнь\u00bb \u2014 Карл Сьюэлл' },
        { label: 'g', text: '\u00abМетод волка с Уолл-стрит\u00bb \u2014 Джордан Белфорт' },
        { label: 'h', text: '\u00abИскусство невозможной сделки\u00bb \u2014 Ричард Мейсон' },
        { label: 'i', text: '\u00abЧемпионы продаж\u00bb \u2014 Мэттью Диксон' },
        { label: 'j', text: '\u00ab45 татуировок продавана\u00bb \u2014 Максим Батырев' },
        { label: 'k', text: '\u00abПродажа начинается с нет\u00bb \u2014 Алексей Воронов' },
        { label: 'l', text: '\u00abСначала скажите \u00abнет\u00bb\u00bb \u2014 Джим Кэмп' },
        { label: 'm', text: 'Не читал книг по этой теме' }
      ]
    },
    {
      id: 11,
      type: 'single',
      text: 'Выберите утверждение которое БОЛЬШЕ ВСЕГО описывает вас:',
      options: [
        { label: 'a', text: 'Лучше работаю когда говорят что именно делать' },
        { label: 'b', text: 'Предпочитаю полную свободу \u2014 правила ограничивают' },
        { label: 'c', text: 'Зависит от задачи \u2014 для рутины инструкции, для нестандартных \u2014 свобода' },
        { label: 'd', text: 'Лучше работаю когда понимаю цель и сам выбираю путь' },
        { label: 'e', text: 'Нужны чёткие инструкции но хочу понимать зачем они нужны' }
      ]
    },
    {
      id: 12,
      type: 'single',
      text: 'Вы работаете уже 3 месяца. Освоили продукт, есть скрипты и инструкции, но конверсия пока ниже средней. Что будете делать?',
      options: [
        { label: 'a', text: 'Скрипты не очень подходят \u2014 нужно больше свободы в общении с клиентами' },
        { label: 'b', text: 'Стоит обсудить с руководителем и попросить обратную связь' },
        { label: 'c', text: 'Возможно, мне просто попадаются сложные клиенты' },
        { label: 'd', text: 'Надо проанализировать свои переписки и звонки \u2014 найти где теряю клиентов' },
        { label: 'e', text: 'Нужно больше времени \u2014 результат придёт с опытом' }
      ]
    },
    {
      id: 13,
      type: 'single',
      text: 'Клиент написал: \u00abЯ подумаю\u00bb. Что это обычно означает?',
      options: [
        { label: 'a', text: 'Стандартная фраза \u2014 через пару дней нужно просто ему напомнить' },
        { label: 'b', text: 'Было бы отлично предложить скидку или бонус чтобы ускорить решение' },
        { label: 'c', text: 'Ему действительно нужно время \u2014 надо уважать, подождать и не быть навязчивым' },
        { label: 'd', text: 'Скорее всего есть возражение, которое клиент не озвучил' }
      ]
    },
    {
      id: 14,
      type: 'single',
      text: 'У вас в CRM 200 сделок. 50 не обновлялись больше месяца. Что с ними?',
      options: [
        { label: 'a', text: 'Чтобы максимально эффективно использовать рабочее время, я подготовлю шаблон сообщения и отправлю всем этим клиентам, немного изменив шаблон и добавив в него имя клиента.' },
        { label: 'b', text: 'Выделю время, пройду по каждой из 50 \u2014 посмотрю историю переписки, напишу персональное сообщение. По результату: кто ответил \u2014 верну в работу, кто нет \u2014 закрою с указанием причины.' },
        { label: 'c', text: 'С ними ничего не нужно делать. Если по сделкам не было контакта в течение месяца, то в каждой сделке должна стоять задача и определен срок следующего контакта.' },
        { label: 'd', text: 'Отсортирую по сумме/потенциалу. Самым перспективным напишу лично, остальных закрою \u2014 нет смысла тратить одинаковое время на всех.' }
      ]
    },
    {
      id: 15,
      type: 'single',
      text: 'Дали инструкцию по технике продаж на 15 страниц. Ваша реакция?',
      options: [
        { label: 'a', text: '15 страниц многовато, вряд ли все возможно запомнить. К тому же гораздо важнее чувствовать клиента, чем следовать инструкциям.' },
        { label: 'b', text: 'Буду читать по мере необходимости \u2014 когда столкнусь с ситуацией' },
        { label: 'c', text: 'Прочитаю, но если что-то мне непонятно или кажется нелогичным, я задам вопросы' },
        { label: 'd', text: 'Прочитаю инструкцию и постараюсь следовать всем указаниям \u2014 если непонятно, спрошу' }
      ]
    },
    {
      id: 16,
      type: 'single',
      text: 'Клиент задал вопрос, ответа в скриптах нет. Что делаете?',
      options: [
        { label: 'a', text: 'Отвечаю как считаю нужным \u2014 клиент ждёт, и скорость ответа важнее, чем точность в формулировках' },
        { label: 'b', text: 'Найду похожую ситуацию в других скриптах и адаптирую ее. Сообщу руководителю что нет скрипта для данной ситуации' },
        { label: 'c', text: 'Напишу что уточню и отвечу позднее \u2014 спрошу коллег или руководителя' }
      ]
    },
    {
      id: 17,
      type: 'single',
      text: 'Клиент просит скидку. В инструкциях \u2014 скидки не предусмотрены. Настаивает, грозит уйти. Что делаете?',
      options: [
        { label: 'a', text: 'Я скажу, что постараюсь согласовать персональную скидку с руководителем и позднее вернусь с ответом' },
        { label: 'b', text: 'Скажу что скидки не предусмотрены и объясню ценность того что входит в наше предложение' },
        { label: 'c', text: 'Позвоню руководителю и узнаю, возможно ли в этом случае сделать исключение' },
        { label: 'd', text: 'Скажу что скидки невозможны и предложу дополнительную ценность по каким-то условиям' }
      ]
    },
    {
      id: 18,
      type: 'single',
      text: 'Клиент спросил о безопасности на маршруте. Вы не знаете ответ. Что делаете?',
      options: [
        { label: 'a', text: 'Скажу что уточню и дам точный ответ в течение определённого времени' },
        { label: 'b', text: 'В данный момент самое главное отработать возражение клиента о безопасности' },
        { label: 'c', text: 'Вряд ли такая ситуация возможна' },
        { label: 'd', text: 'Спрошу у коллег или найду информацию в интернете и сразу отвечу клиенту' }
      ]
    },
    {
      id: 19,
      type: 'single',
      text: 'Достаточно много общались с клиентом, и он был заинтересован и уже даже был готов оплатить. Вы пишете ему, чтобы узнать как дела, а он говорит: \u00abЗдравствуйте, пока решил отложить\u00bb. Ваше следующее сообщение:',
      options: [
        { label: 'a', text: '\u00abПонимаю, обращайтесь когда будете готовы! Буду рад помочь.\u00bb' },
        { label: 'b', text: '\u00abПривет! Жаль слышать. Могу предложить специальные условия если забронируете на этой неделе \u2014 хотите обсудить?\u00bb' },
        { label: 'c', text: '\u00abПривет! Понял, без проблем. А когда примерно планируете вернуться к этому вопросу? Чтобы я напомнил в нужный момент.\u00bb' },
        { label: 'd', text: '\u00abПривет! Уточни, пожалуйста, ты решил отложить на какой-то определенный срок или ты в принципе решил отказаться от этой идеи?\u00bb' }
      ]
    },
    {
      id: 20,
      type: 'multi',
      text: 'Отметьте ВСЕ фильмы из списка которые вы смотрели:',
      options: [
        { label: 'a', text: '\u00abВолк с Уолл-стрит\u00bb (The Wolf of Wall Street)' },
        { label: 'b', text: '\u00abПоследняя сделка\u00bb (The Last Deal)' },
        { label: 'c', text: '\u00abБойлерная\u00bb (Boiler Room)' },
        { label: 'd', text: '\u00abЗолотой звонок\u00bb (The Golden Call)' },
        { label: 'e', text: '\u00abГленгарри Глен Росс\u00bb (Glengarry Glen Ross)' },
        { label: 'f', text: '\u00abВ погоне за счастьем\u00bb (The Pursuit of Happyness)' },
        { label: 'g', text: '\u00abЗакрытие\u00bb (The Closing)' },
        { label: 'h', text: '\u00abДжерри Магуайер\u00bb (Jerry Maguire)' },
        { label: 'i', text: '\u00abСоциальная сеть\u00bb (The Social Network)' },
        { label: 'j', text: '\u00abВторой шанс продавца\u00bb (Salesman\'s Second Chance)' },
        { label: 'k', text: '\u00abОснователь\u00bb (The Founder)' },
        { label: 'l', text: '\u00abБольшая игра\u00bb (Molly\'s Game)' },
        { label: 'm', text: '\u00abСтажёр\u00bb (The Intern)' },
        { label: 'n', text: 'Не смотрел фильмы на эту тему' }
      ]
    },
    {
      id: 21,
      type: 'ranking',
      text: 'Расставьте по важности (1 = самое важное, 5 = наименее важное):',
      options: [
        { label: 'income', text: 'Размер дохода' },
        { label: 'product', text: 'Интересный продукт' },
        { label: 'instructions', text: 'Чёткие инструкции и система работы' },
        { label: 'freedom', text: 'Самостоятельность и свобода' },
        { label: 'team', text: 'Дружный коллектив' }
      ]
    },
    {
      id: 22,
      type: 'single',
      text: 'Клиент оставил заявку на обратный звонок. Вы звоните. Какова главная цель первого звонка?',
      options: [
        { label: 'a', text: 'Постараться продать тур' },
        { label: 'b', text: 'Рассказать все подробности о наших турах и предложить подходящий вариант' },
        { label: 'c', text: 'Представиться, узнать имя, ответить на вопросы и сохранить всю информацию в CRM' },
        { label: 'd', text: 'Выяснить что нужно, насколько готов к покупке, есть ли сомнения' }
      ]
    },
    {
      id: 23,
      type: 'single',
      text: 'Понедельник: 15 непрочитанных, 3 задачи от руководителя, 2 пропущенных звонка. Что ПЕРВЫМ?',
      options: [
        { label: 'a', text: 'Начну с задач от руководителя \u2014 это приоритетно' },
        { label: 'b', text: 'Составлю список дел, расставлю приоритеты, потом начну' },
        { label: 'c', text: 'Быстро пробегу все 15 и выделю срочные \u2014 потом по приоритету' },
        { label: 'd', text: 'Перезвоню по пропущенным \u2014 раз звонили значит срочно' }
      ]
    },
    {
      id: 24,
      type: 'single',
      text: 'Заметили что один скрипт работает хуже других. Ваши действия?',
      options: [
        { label: 'a', text: 'Буду отвечать по-своему, как считаю более правильным' },
        { label: 'b', text: 'Буду использовать как есть \u2014 это не моя зона ответственности' },
        { label: 'c', text: 'Поменяю формулировку, если сработает \u2014 предложу изменение' },
        { label: 'd', text: 'Сообщу руководителю что работает плохо и предложу свой вариант' }
      ]
    },
    {
      id: 25,
      type: 'multi',
      text: 'Как вы обычно развиваетесь в продажах? (отметьте ВСЕ подходящие)',
      options: [
        { label: 'a', text: 'Книги' },
        { label: 'b', text: 'Подкасты' },
        { label: 'c', text: 'YouTube/видеоуроки' },
        { label: 'd', text: 'Платные курсы и тренинги' },
        { label: 'e', text: 'Конференции и вебинары' },
        { label: 'f', text: 'Наставничество / менторство' },
        { label: 'g', text: 'Только практический опыт \u2014 учусь в процессе' }
      ]
    },
    {
      id: 26,
      type: 'single',
      text: 'Какую схему оплаты вы бы предпочли?',
      options: [
        { label: 'a', text: 'Высокий фикс и небольшие бонусы' },
        { label: 'b', text: 'Только фиксированная оплата, без бонусов' },
        { label: 'c', text: 'Небольшой фикс + бонусы с продаж с хорошим процентом' },
        { label: 'd', text: 'Только бонусы с продаж, без фиксированной части \u2014 но процент высокий' }
      ]
    },
    {
      id: 27,
      type: 'single',
      text: 'Клиент: \u00abУ конкурентов дешевле\u00bb. Какая реакция НАИМЕНЕЕ эффективна?',
      options: [
        { label: 'a', text: '\u00abДавайте сравним что получаете \u2014 и тогда решите, что для вас важнее \u2014 разница в сервисе или разница в цене.\u00bb' },
        { label: 'b', text: '\u00abЭто не проблема. Я думаю, мы сможем сделать вам скидку\u00bb' },
        { label: 'c', text: '\u00abДа, у нас не самое дешёвое предложение. А вы уточняли, что именно у них входит в цену?\u00bb' },
        { label: 'd', text: '\u00abКомпания, о которой вы говорите, известна своим крайне низким уровнем сервиса...\u00bb' }
      ]
    },
    {
      id: 28,
      type: 'single',
      text: 'Нужно изучить базу из 291 скрипта. Как подойдёте?',
      options: [
        { label: 'a', text: 'Прочитаю все 291 \u2014 нужно знать каждый' },
        { label: 'b', text: 'Попрошу выделить 20\u201330 самых частых, остальные по мере необходимости' },
        { label: 'c', text: 'Буду читать по мере появления ситуаций' },
        { label: 'd', text: 'Изучу структуру и научусь быстро находить нужный по ситуации' }
      ]
    },
    {
      id: 29,
      type: 'single',
      text: 'С клиентом год назад обсуждали тур на Эльбрус, но после этого не контактировали. Напишите первое сообщение.',
      options: [
        { label: 'a', text: '\u00abДобрый день! Я хотел бы узнать, актуально ли для вас восхождение на Эльбрус? Мы готовы предложить вам лучшие условия в этом сезоне.\u00bb' },
        { label: 'b', text: '\u00abЗдравствуйте! Мы с вами обсуждали восхождение на Эльбрус. Если планы не изменились, могу рассказать что нового в программе на этот сезон.\u00bb' },
        { label: 'c', text: '\u00abПривет! Мы с вами общались год назад по поводу Эльбруса. Вам в итоге удалось подняться? Или это все еще актуально для вас?\u00bb' },
        { label: 'd', text: '\u00abПривет! У нас начался набор групп на следующий сезон. Для ранних бронирований действует лучшая цена. Ниже отправлю описание программы и расписание заездов. Если появятся вопросы, буду рад ответить! :)\u00bb' }
      ]
    },
    {
      id: 30,
      type: 'single',
      text: 'Новый клиент: \u00abХочу на Эльбрус\u00bb. У вас 5 программ. Что отправите?',
      options: [
        { label: 'a', text: 'Предложу ознакомиться с программами на сайте, потому что там все красиво и подробно оформлено и с фотографиями \u2014 дам ему прямые ссылки на 5 программ' },
        { label: 'b', text: 'Коротко расскажу о всех пяти вариантах и предложу выбрать тот, который ему понравится' },
        { label: 'c', text: 'Узнаю какого рода программу он хочет и предложу те варианты, которые соответствуют его пожеланиям' }
      ]
    },
    {
      id: 31,
      type: 'likert',
      text: 'Легко работать 4\u20135 часов подряд над одной задачей.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 32,
      type: 'likert',
      text: 'Предпочитаю работать как привык.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 33,
      type: 'likert',
      text: 'Если беру задачу, довожу до результата.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 34,
      type: 'likert',
      text: 'Часто переключаюсь между задачами \u2014 сложно одним делом долго.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 35,
      type: 'likert',
      text: 'Сначала понимаю ситуацию клиента, прежде чем предлагать.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 36,
      type: 'likert',
      text: 'Сложно начать скучную задачу \u2014 откладываю.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 37,
      type: 'likert',
      text: 'Когда меняются процессы, стараюсь быстро перестроиться.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 38,
      type: 'likert',
      text: 'Если ошибка не по моей вине, не считаю нужным исправлять.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 39,
      type: 'likert',
      text: 'Обычно заканчиваю одну задачу прежде чем браться за следующую.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 40,
      type: 'likert',
      text: 'Быстро становится скучно от однотипных задач.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 41,
      type: 'likert',
      text: 'Легко выдерживаю полный 8-часовой день за компьютером.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 42,
      type: 'likert',
      text: 'Если клиент интересуется туром, сразу рассказываю обо всех вариантах.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 43,
      type: 'likert',
      text: 'Могу долго работать над одной задачей без потери внимания.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 44,
      type: 'likert',
      text: 'Нужно разнообразие в течение дня \u2014 иначе теряю продуктивность.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 45,
      type: 'likert',
      text: 'Сложно сидеть на одном месте долго \u2014 нужно движение.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    },
    {
      id: 46,
      type: 'likert',
      text: 'Часто недооцениваю сколько времени займёт задача.',
      options: [
        { label: 0, text: 'Совсем не согласен' },
        { label: 1, text: 'Скорее нет' },
        { label: 2, text: 'Скорее да' },
        { label: 3, text: 'Полностью согласен' }
      ]
    }
  ]
};

$(document).ready(function() {
    $("#open").click(function() { 
        $("#top").addClass("moveUp");
        $("#bottom").addClass("moveDown");
        $("#banner").fadeOut(1000);
        $("#bottom").fadeOut(1000);
        $("#canvas").addClass("postBtn");
        $("#text").fadeIn(1000).removeClass("hidden").addClass("moveUp");
        $("#tbb").fadeIn(1000).removeClass("hidden").addClass("moveUp");
    });
    $(".song").click(function(){
        $("#lyrics").html("");
    });
    $("#a1").click(function(){
        $("#lyrics").html("<h1>Blast Off!</h1><p>Like Han and his Blaster and Team Rocket wants a Master Ball</p><p>I wanna have it all, I wanna blast off!</p><br><p>Bb C F Dm-C</p><p>Bb C F~</p><p>Bb C Dm F</p><p>Bb C F~</p>");
    });
    $("#a2").click(function(){
        $("#lyrics").html("<h1>Getting Blasted Down By The 7/11</h1><p>You were born in the back of a 7/11 underground in a California town by the coast</p><p>You were born in a tropical lime storm</p><p>I know you're not used to the cold when I feel your muscles move against my bones</p><p>Getting older starts to take it's toll when you're running out of things to do</p><br><p>Well I know you love watching from the sidelines</p><p>But hey now you are an all star, get your game on go and play</p><p>I know that the lot is full but my ATM's inside and I can't afford the fee next door</p><p>You say that you're moving home, well I just can't see myself leaving New England</p><br><p>verse : F Am Bb C / F Am Bb~</p><p>chorus : Dm Em F Bb / Dm C Bb~ / Dm Em F Bb / Dm C F~</p>");
    });
    $("#a3").click(function(){
        $("#lyrics").html("<h1>I Dew</h1><p>I Dew, Do You?</p><p>I Do, Dew You?</p><p>Hanging out by the parking lot of the mall, you thought you had it all</p><p>You thought you couldn't stop blasting off at the cops who never take you down</p><p>So you keep hanging around, you're always hanging around</p><p>I Dew, Do You?</p><p>I Do, Dew You Do The Dew?</p><br><p>intro/verse : F C Am G / F Am G~</p><p>break : F</p><p>build : F G Am C</p>");
    });
    $("#a4").click(function(){
        $("#lyrics").html("<h1>Livewire</h1><p>C D# F Bb-C#</p>");
    });
    $("#a5").click(function(){
        $("#lyrics").html("<h1>Bell Dreams</h1><p>Late at night I'm in my bed</p><p>Half stoned thoughts go through my head</p><p>I sure could go for a beefy fritos burrito</p><p>The store is closed but I can always dream though</p><br><p>I've got Bell Dreams</p><p>I've got Bell Dreams</p><p>I've got Bell Dreams</p><p>I've got Bell Dreams</p><br><p>My friends all hit me up tonight</p><p>I need some dew to feel alright!</p><p>Let's hop in the car and head down to the bell</p><p>I'd drive all night, I'd walk through hell!</p><p>and if I could swim, I'd swim out to you in the ocean</p><p>Swim out to where you were floating in the dark</p><p>To find that late night fourth meal</p><p>I'm sure you all know how I feel</p><br><p>I've got Bell Dreams</p><p>I've got Bell Dreams</p><p>I've got Bell Dreams</p><p>I've got Bell Dreams</p><br><p>intro/verse a : B~ Cm A</p><p>verse b : Cm~ B~</p><p>chorus: A~ Cm B");
    });
    $("#b1").click(function(){
        $("#lyrics").html("<h1>Little Joshy Holden's Dream</h1><p>Imagine a beach where the sand is actually millions of smashed up taco bell doritos locos tacos</p><p>and the ocean is actually baja blast and oh I don't know</p><p>the seagulls are actually flying Taco Bell employees</p><p>anyways, thats just a few ideas on how the beach could be good</p><br><p>F~ Bb C</p>");
    });
    $("#b2").click(function(){
        $("#lyrics").html("<h1>Be Strong, Gail!</h1><p>Don't be afraid, it's not your fault</p><p>Don't be ashamed of your own thoughts</p><br><p>Pennsylvania, you made us</p><p>Pennsylvania you tore us apart</p><p>Competing gas station chains drove a stake right through the belly of our hearts</p><br><p>No charts no graphs no science no math no maps or little distractions</p><p>Just a great big state divided into warring factions</p><br><p>I hope that you will come around, I'll be waiting at the Wawa on my side of town</p><p>I know that you'd rather burn it down, but I can't live off Sheetz forever</p><br><p>Don't be afraid, it's not your fault</p><p>Don't be ashamed of your own thoughts</p><br><p>C Bm G Am</p><p>C D G~</p>");
    });
    $("#c1").click(function(){
        $("#lyrics").html("<h1>Last Great Party House</h1><p>It was the last great party house in the corner of our side of town</p><p>When you told me you were moving south, you were so quiet it was freaking me out</p><p>So for one more night we'll fill this house with light</p><p>We'll redifine what it means to be alive</p><br><p>So tell me when you go, cuz I can't make it on my own</p><p>Tell me when you have to go, I can't run this show alone</p><br><p>If the roof is on fire then we'll head to the diner</p><p>Meet up with some new friends, let's see where this night takes us</p><p>How many pop punk songs do I have to write before you come home?</p><br><p>So tell me when you go, cuz I can't make it on my own</p><p>Tell me when you have to go, I can't run this show alone</p><br><p>intro : C F Am F</p><p>verse : C B Am F-G</p><p>chorus : Am F / Am-G F</p><iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/zpPg_y3wdfo\" frameborder=\"0\" allowfullscreen></iframe>");
    });
    $("#c2").click(function(){
        $("#lyrics").html("<h1>Party Dad</h1><p>Party Dad, pick me up!</p><p>Pick me up for the party!</p><p>We can sing, sing along</p><p>To our favorite songs on //// the way there //// we're almost there</p><br><p>Party Dad, can you talk</p><p>Can you talk to the cops if</p><p>They come, bust it up</p><p>While we flee from the party //// You're 18 //// you don't drink</p><br><p>We climbed up high atop the baseball stands</p><p>the flashing lights pulled up we jumped and we ran</p><p>you're 18 and crimes are more important</p><p>on your record, we did not understand</p><br><p>part one : Bb F </p><p>part two : Dm Bb Am F</p><iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/wfRfhqphFpI\" frameborder=\"0\" allowfullscreen></iframe>");
    });
    $("#c3").click(function(){
        $("#lyrics").html("<h1>Taco Party</h1><p>Taco Party, Taco Party you're all I need</p><p>Taco Party, Taco Party you're all I need</p><p>Vegan Tacos and Donuts!</p><br><p>intro : A F#m-Bm</p><p>verse : A Bm</p><p>bridge : F#m Bm</p><iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/zGyBrsHmZSM\" frameborder=\"0\" allowfullscreen></iframe>");
    });
});
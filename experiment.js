//////////////////
//Helper functions
///////////////////

// Shows slides. We're using jQuery here - the **$** is the jQuery selector function, which takes as input either a DOM element or a CSS selector string.


function showCurrent(event)
{
    //var duration = event.duration;
    var duration = event.duration;
   
}

function randomInteger(n) {
	return Math.floor(Math.random()*n);
}

function randomElement(array) {
  return array[randomInteger(array.length)];
}

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

//shuffle an array
function shuffleArray(a) {

    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}



////////////////////////////////////////////////
//Instructions for the Task and preTask training
///////////////////////////////////////////////

var MyInstruct = {
  


    "train_sound" :"Now you will be trained to trials on sound difference!",
    
    "refresh" :"<font size=6><b>Refresh your memory!</b></font>",
    
    "refresh_pra" :"<font size=6><b>Refresh your memory!</b></font></br></br>To refresh your memory, you will see another learning trial. You will be tested again after this refreshment!",
    
    "PracticeObj":"<font size=6><b>Practice Object discrimination!</b></font>",
    
    "Obj":"<font size=6><b>Real Object discrimination!</b></font>",
    
    "PracticeSnd":"<font size=6><b>Practice Sound discrimination!</b></font>",
    
    "Snd":"<font size=6><b>Real Sound discrimination!</b></font>",
    
    "PracticeWord":"<font size=6><b>Practice</b></font> <br><br> This is a practice example. You will see 2 objects and hear their names. Listen carfully and try to remember the words!",
    
    "Word":"<font size=6><b>Real Word learning</b></font><br><br>There are 5 word pairs to learn in total. <br> For each pair, you will have 4 learning trials, followed by 4 test trials.<br> Refreshment will be 2 addtional learning trials.",
    
    "Testing":"<font size=6><b>Now testing will begin!</b></font>",
    
    "WordTest":"<font size=6><b>Now testing will begin! </font></b>",
    
    "WordTest_pra":"<font size=6><b>Practice test! </font></b> <br><br> You will hear a name and your task is to choose the corresponding object!",
    
    "train_object" :"<font size=6><b>Now you will be trained to trials on object difference!</b></font>",
    
    "sound" :"Next are the real trials on sound difference!",
    
    "object" :"Next are the real trials on object difference!",
    
    
    "learn_pre_inst": "An alien will be naming to his friend a series of two objects from the alien planet.  <br><br> You will now see some training examples.  You sould listen carefully and try to learn the names of the objects. You will later perform a task that tests your knowledge of these words.", 

    
    "again": "Press to listen again",
    
    "newTrial": "Press to start a new word pair!",
    
    "newPractice" : "Press for another practice example",
    
    "learn_pre1":"In this example, the alien will be speaking in English. <br><br>Please listen carefully and try to learn the words.",
    
    
    "test_pre1": "This is an example of word knowledge test.<br><br>The alien will name one of the two previously seen objects. You should help the alien's friend decide which of the two objects corresponds to the name.",
    
    
    "learning":"Press to hear the words! <br><br> The test will follow after this presentation!",
    
    "testing":"Press to start the test", 
    
    "end_pre1":"Clickstart Continue for next!",
    
    "example2":"Now you will see an example were objects are ambiguous. <br><br>Pay attention to the alien's words: if the alien uses the same word (e.g., ABA-ABA), it is an indication that both objects belong to the same category. Conversely, it the alien uses different words (ABA-ADA), it is an indication that the objects belong to different categories. <br><br> Please listen carefully and try to learn the unique name (if there is one category) or the two names (if there are two categories).", 
    
    "example3":"Now you will see an example where, not only the objects, but also the sounds are ambiguous (non English sounds). <br><br> Please listen carefully and try to learn the unique name (if you think there is one category) or the two names (if you think there are two categories). <br><br><b>IMPORTANT: to overcome the difficulty that both the objects and the sounds can be ambiguous, you should rely on BOTH the similarity of the objects and the similarity of the sounds to decide if there is one or two categories<b>", 
    
    
    "nonEng":"In the previous examples, we used clear english sounds. Next (and in the real experiment) the sounds will be in an alien language. <br><br> Another thing that makes this new task difficult is the fact that, sometimes, the same word can be pronounced slightly differently.  The difficulty is that you should now decide if the objects are being described by the same word (even when pronounced slightly differently) or if they are being described by different words in the alien language. <br><br> Click Continue to read more instructions!", 
    
    
    
    "learn_pre2": "In this example the alien will NOT be speaking in English, but in an alien language. <br><br>In this langauge, words are very similar (e.g., 'ABA', 'ADA'), and it is sometimes difficult to tell when two words are the same (e.g., 'ABA', 'ABA') and when they are different (e.g., 'ABA', 'ADA'). <br><br> You sould listen carefully and try to learn the names of the objects.", 
    
    "test_pre2": "This is an example of the test. <br><br>If you think the objects were named by different words (e.g., ABA-ADA), then you should pick the correct object. <br><br>If, instead, you think the objects were named by the same word (e.g., ABA-ABA), then it does not matter which object you pick.",
    
    "test_pre3": "This is an example of the test. <br><br> If you think the objects were named by different words, then you should pick the correct object. <br><br> If you think the objects were named by the same word, then it does not matter which object you pick.",
    
    "end_pre2": "<b><font size='5'>If you are ready, click Continue to start the real experiment</font></b>",
    
    "instruct_real": "<b>Now you will start the real experiment!</b> <br><br>Remember that both the objects and the sounds can be ambiguous. The objects are ambiguous because they share features of both prototypes, and the sounds are ambiguous because it is not always clear if the same word is pronouced slightly differently, or if there are two words! <br><br> To overcome this difficulty, remember that you should rely on both the similarity of the sounds, and the similarity of the objects.<br><br><b>IMPORTANT: Every naming situation is different and independent, and the number of words can change from one situation to another depending on both the similarity of the sounds and the similarity of the objects, so do NOT assume there is one or two words based only on the sounds or only on the object!</b>",
    
    "learn_real": "Please listen carefully and try to learn the words!",
    
    "test_real": "Press to hear the test word!",
    
    "end_real": "Press to start a new naming situation!"
    
}


function end_block(block){
return "<b>You have finished "+block+ " out of 4 blocks!</b><br><br> Note that each block is totally independent. Your answers in one block need not be related to your other answers in subsequent blocks.";
}


var scale_inst_eg =  "In the previous example, we used objects whose identity was clear (the prototypes). However, real objects in the alien planet vary in their shapes. Their identity (that is, whether they belong to the category of prototype 1 or the category of prototype 2) can sometimes be ambiguous since they share features from both prototypes. <br><br>Below is an illustration of this variabiliy. Please take a moment to explore it!"

var scale_inst = "Please take a moment to explore the range of variability of the objects!"

///////////////////////
//Preload the stimuli
///////////////////////


var silence = new $('<audio>').attr('src','sounds/mysilence.mp3').attr("preload", "auto");



//var $empty_l = new $('<img>').attr('src','images/empty.jpg').height(50).width(50);

//Preloading the alien picture used for illustration: 

var $alien = new Array();
$alien.push($('<img>').attr('src','images/alien2.png').height(130).width(180));
$alien.push($('<img>').attr('src','images/alien1.png').height(130).width(180));





var col = "#ffffff";


var bird = new Ecosystem.Genus('bird', {col2:col, col3:col, col3:col, tar1:1, tar2:0 });
    
var flower = new Ecosystem.Genus('flower', {col2:col, col3:col, col4: col,  tar1:1, tar2:0 });

var fish = new Ecosystem.Genus('fish', {col2:col, col3:col, col4:col, tar1:1, tar2:0 });
    
var bug = new Ecosystem.Genus('bug', {col2:col, col3:col, col4:col, tar1:1, tar2:0 });

var tree = new Ecosystem.Genus('tree', {col2:col, col3:col, col4:col, tar1:1, tar2:0 });


//var CatEx = randomElement(["bird", "flower", "fish", "bug"])




var Concept_pre0 = [{category:flower, prop:0, col1:col}, {category:flower, prop:1, col1:col}]



//Preloading Task stim (0: left, 1: right)
var rando=0;




//sound stimuli


var sound_similar =[
    
    ["ar_a_X_H_a", "ar_a_H_X_a", "ar_a_X_a", "ar_a_H_a"],
    ["in_a_d_dd_aa", "in_a_dd_d_aa", "in_a_d_aa", "in_a_dd_aa"]
    //["aka_ama", "ama_aka", "aka", "ama"]
]

var sound_different=[
    
    //["aba_ada", "ada_aba", "aba", "ada"],
    ["asa_asha", "asha_asa", "asa", "asha"],
    ["aka_ama", "ama_aka", "aka", "ama"]
]

var sound_similar_rand = shuffleArray(sound_similar)
var sound_different_rand = shuffleArray(sound_different) 

var sound_training = ["aba_ada", "ada_aba", "aba", "ada"]

var sound_catch =  ["aba_ada", "ada_aba", "aba", "ada"]

var sound_cluster1 = [
    [sound_similar[0], 'similar'],
    [sound_different[0], 'different']
]



var sound_cluster2 = [
    [sound_similar[1],'similar'],
    [sound_different[1], 'different']
]

//First the training
var simTrain1= $('<audio>').attr('src','sounds/'+sound_training[0]+'.mp3').attr("preload", "auto");

var simTrain2 = $('<audio>').attr('src','sounds/'+sound_training[1]+'.mp3').attr("preload", "auto");

var simTest = $('<audio>').attr('src','sounds/'+sound_training[2]+'.mp3').attr("preload", "auto");

//Now the main thing:

//cluster 1
//s-diff vs. c-diff, 
//s-sim vs. c-sim,
    
//cluster 2  
//s-diff vs. c-sim, 
//s-sim vs. c-diff,


//Order of the clusters
var SoundLearn_cluster1 = new Array()
var SoundTest_cluster1 = new Array()


//First cluser (similar+different)


var SoundLearn_cluster1 = new Array()
var SoundTest_cluster1 = new Array()

var rd1 = shuffleArray([0,1])
var rd2 = shuffleArray([0,1])

for(i=0; i< sound_cluster1.length; i++) {
    
    SoundLearn_cluster1.push([
        
                     $('<audio>').attr('src','sounds/'+sound_cluster1[rd1[i]][0][0]+'.mp3').attr("preload", "auto"),
                     
                     $('<audio>').attr('src','sounds/'+sound_cluster1[rd1[i]][0][1]+'.mp3').attr("preload", "auto"),
        
                     sound_cluster1[rd1[i]][1]
        
                    ])
}

for(i=0; i< sound_cluster1.length; i++) {
    
    SoundTest_cluster1.push([
        
                     $('<audio>').attr('src','sounds/'+sound_cluster1[rd1[i]][0][2]+'.mp3').attr("preload", "auto"),
                     
                     $('<audio>').attr('src','sounds/'+sound_cluster1[rd1[i]][0][3]+'.mp3').attr("preload", "auto"),
        
                     sound_cluster1[rd1[i]][1],
        
                     sound_cluster1[rd1[i]][0][2]
        
        
                    ])
}



////Second cluser (similar+different)
/////////////////

var SoundLearn_cluster2 = new Array()
var SoundTest_cluster2 = new Array()

for(i=0; i< sound_cluster2.length; i++) {
    
    SoundLearn_cluster2.push([
        
                     $('<audio>').attr('src','sounds/'+sound_cluster2[rd2[i]][0][0]+'.mp3').attr("preload", "auto"),
                     
                     $('<audio>').attr('src','sounds/'+sound_cluster2[rd2[i]][0][1]+'.mp3').attr("preload", "auto"),
        
                     sound_cluster2[rd1[i]][1]
        
                     
        
                    ])
}

for(i=0; i< sound_cluster2.length; i++) {
    
    SoundTest_cluster2.push([
        
                     $('<audio>').attr('src','sounds/'+sound_cluster2[rd2[i]][0][2]+'.mp3').attr("preload", "auto"),
                     
                     $('<audio>').attr('src','sounds/'+sound_cluster2[rd2[i]][0][3]+'.mp3').attr("preload", "auto"),
        
                     sound_cluster2[rd2[i]][1] ,
        
                     sound_cluster2[rd1[i]][0][2]
        
                    ])
}


//Catch trial
//////////////

var catch_learn = [ 
                     [$('<audio>').attr('src','sounds/'+sound_catch[0]+'.mp3').attr("preload", "auto"),
                      $('<audio>').attr('src','sounds/'+sound_catch[1]+'.mp3').attr("preload", "auto"),
        
                     "catch"]
        
                    ]

var catch_test = [
                     [$('<audio>').attr('src','sounds/'+sound_catch[2]+'.mp3').attr("preload", "auto"),
                     $('<audio>').attr('src','sounds/'+sound_catch[3]+'.mp3').attr("preload", "auto"),
        
                     "catch",
                     sound_catch[2] ]
        
                    ]


var category_name = ["bird", "tree", "fish", "bug"]
var category = [bird, tree, fish, bug]

var catRand = shuffleArray([0,1,2,3])
//Concept stimuli

//define similar and different proportion

var visDist = 0.15

var concept_cluster1 = [
    [{category:category[catRand[0]], prop:0, col1:col},{category:category[catRand[0]], prop:visDist, col1:col}, 'similar', category_name[catRand[0]]],
    [{category:category[catRand[1]], prop:0, col1:col},{category:category[catRand[1]], prop:1, col1:col}, 'different', category_name[catRand[1]]]
]

var concept_cluster2 =[
    [{category:category[catRand[2]], prop:0, col1:col},{category:category[catRand[2]], prop:1, col1:col}, 'different', category_name[catRand[2]]],
    [{category:category[catRand[3]], prop:0, col1:col},{category:category[catRand[3]], prop:visDist, col1:col}, 'similar', category_name[catRand[3]]]
]


var concept_catch = [
    {category:flower, prop:0, col1:col},
    {category:flower, prop:1, col1:col},
    'catch', 'flower'
]

//Now the main thing:

//cluster 1
//s-diff vs. c-diff, 
//s-sim vs. c-sim,
    
//cluster 2  
//s-diff vs. c-sim, 
//s-sim vs. c-diff,

var concept_all = new Array();
 

var cluster_order = randomElement([0,1])
 //if 0 --> cluster 1 first 
 //if 1 --> cluster 2 first 
if (cluster_order == 0) {
    
    concept_all =[
        
        concept_catch,
        concept_cluster1[rd1[0]],
        concept_cluster1[rd1[1]],
        concept_cluster2[rd2[0]],
        concept_cluster2[rd2[1]]
    ]
   
} else if (cluster_order == 1) {
    
    concept_all =[
        concept_catch,
        concept_cluster2[rd1[0]],
        concept_cluster2[rd1[1]],
        concept_cluster1[rd2[0]],
        concept_cluster1[rd2[1]]
    ]

}

//Join all trails into a single sequence:

var sound_train_all =  catch_learn.concat(SoundLearn_cluster1, SoundLearn_cluster2)

var sound_test_all = catch_test.concat(SoundTest_cluster1, SoundTest_cluster2)

//for each condition generate a random mapping


// 0 is code for "same" and 1 code for "different"
var myKeyBindings = {"Q": 0, "P": 1};
   

$(".same-key").text("Q");
$(".different-key").text("P");

///////////////////////
//Build trial sequence:
////////////////////////

//Here we separete the sequences fo each condition in order to be able to randomize theur order for each subject
var myTrials=[];


//preTask traning 1
//////////////////


//The final slide for the briefing


myTrial = {
        condition: '',
        trial:'',
        trial_type: 'PracticeWord',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);


//Practice for different

myTrial = {
        condition: 'joint',
        trial:'',
        trial_type: "Train_pre",
        item:'',
        concept_l:Concept_pre0[0],
        concept_r:Concept_pre0[1],
        sound:simTrain1,
        sameDiff:'',
        correct:'',
        concept_val:'',
        sound_val:'',
        experiment:'word'
    }
    
    myTrials.push(myTrial);


myTrial = {
        condition: '',
        trial:'',
        trial_type: 'WordTest_pra',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);

myTrial = {
        condition: 'joint',
        trial:'',
        trial_type: "Test_pre",
        item_object:'',
        item_sound:'',
        concept_l:Concept_pre0[0],
        concept_r:Concept_pre0[1],
        sound:simTest,
        sameDiff:'',
        correct:'',
        concept_val:'',
        sound_val:'',
        experiment:'word'
    }
    
    myTrials.push(myTrial);


myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "refresh_pra",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        concept_val:'',
        sound_val: '',
        condition:''
        
        });

myTrial = {
        condition: 'joint',
        trial:'',
        trial_type: "Train_pre",
        item:'',
        concept_l:Concept_pre0[0],
        concept_r:Concept_pre0[1],
        sound:simTrain1,
        sameDiff:'',
        correct:'',
        concept_val:'',
        sound_val:'',
        experiment:'word'
    }
    
    myTrials.push(myTrial);

myTrial = {
        condition: '',
        trial:'',
        trial_type: 'WordTest_pra',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);


myTrial = {
        condition: 'joint',
        trial:'',
        trial_type: "Test_pre",
        item_object:'',
        item_sound:'',
        concept_l:Concept_pre0[1],
        concept_r:Concept_pre0[0],
        sound:simTest,
        sameDiff:'',
        correct:'',
        concept_val:'',
        sound_val:'',
        experiment:'word'
    }
    
    myTrials.push(myTrial);



myTrial = {
        condition: '',
        trial:'',
        trial_type: 'Word',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);


//shuffle conditions
cond = shuffleArray([0,1,2,3,4])

//Randomize the object-Sound mapping 
var map1 = randomElement([0,1]),
        map2 = randomElement([0,1]),
        map3 = randomElement([0,1]),
        map4 = randomElement([0,1]),
        map5 = randomElement([0,1]);
    
    var mapping = [map1, map2, map3, map4, map5]
                             
    
//Wait we only have 
    
//randomize the order following 2 clusters
    
//s-diff vs. c-diff, 
//s-sim vs. c-sim,
    
//in between we have the catch trial (Tree)
    
//s-diff vs. c-sim, 
//s-sim vs. c-diff,
    
//Here double loop,
//one over the cluster (sim-diff), 
//and another over the order of the condition within cluster  
    

for (i=0; i<concept_all.length; i++){//iterate over all conditions 
    
    var m = mapping[i] //0 or 1
    
    myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "newTrial",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        concept_val:'',
        sound_val: '',
        condition:''
        
        });
    
    //iterate over trials (here we have 2 trials)
    /////////////////////
    
    //iterate over train repetitions within a condition
    
    for (k=0; k<4; k++){

      
    myTrial = {
        condition: i,
        trial:k,
        trial_type: "Train",
        item:concept_all[i][0].category,
        concept_l:concept_all[i][0],
        concept_r:concept_all[i][1],
        sound:sound_train_all[i][m],
        sameDiff:'',
        correct:correct,
        concept_val:concept_all[i][2],
        sound_val:sound_train_all[i][2],
        experiment:'word'
    }
    
    myTrials.push(myTrial);
        
        
    }
    
    myTrial = {
        condition: '',
        trial:'',
        trial_type: 'Testing',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);

    //unlike the training where the object order is fiwxed, in the test the alternates changes 
    
    var ObjOrder_test = shuffleArray([[0,1],[0,1],[1,0],[1,0]])
    
    
    //Here we alternate which member of the word pair is tested
    var SndOrder_test = shuffleArray([0,0,1,1])

        
    //iterate over test questions within a trial 
    for (k=0; k<4; k++){
    
    //for each test trial, pick both an order and a sound
     var o=ObjOrder_test[k],
         s=SndOrder_test[k];
    
     //correct answer
     //left answer is  coded 0, and right answer 1
        var correct= o[m]==s? 0: 1; 
    
        
   //testing
    myTrial = {
        condition: i,
        trial:1,//this should be called block instead
        trial_type: "Test",
        item_object:concept_all[i][3],
        item_sound:sound_test_all[i][3],
        concept_l:concept_all[i][o[0]],
        concept_r:concept_all[i][o[1]],
        sound:sound_test_all[i][s],
        sameDiff:'',
        correct:correct,
        concept_val:concept_all[i][2],
        sound_val:sound_test_all[i][2],
        experiment:'word'
    }
    
    myTrials.push(myTrial);
        
        
    
   }
       
    
    //Second block
    
    
    myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "refresh",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        concept_val:'',
        sound_val: '',
        condition:''
        
        });
    
    //iterate over train repetitions within a refreshment trials
    for (k=0; k<2; k++){
    
      
    myTrial = {
        condition: i,
        trial:k,
        trial_type: "Train",
        item:concept_all[i][0].category,
        concept_l:concept_all[i][0],
        concept_r:concept_all[i][1],
        sound:sound_train_all[i][m],
        sameDiff:'',
        correct:correct,
        concept_val:concept_all[i][2],
        sound_val:sound_train_all[i][2],
        experiment:'word'
    }
    
    myTrials.push(myTrial);
        
        
    }
    
    myTrial = {
        condition: '',
        trial:'',
        trial_type: 'Testing',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);

    
    var ObjOrder_test = shuffleArray([[0,1],[0,1],[1,0],[1,0]])
    
    var SndOrder_test = shuffleArray([0,0,1,1])

        
    //iterate over test questions within a trial 
    for (k=0; k<4; k++){
    
    
     var o=ObjOrder_test[k],
         s=SndOrder_test[k];
    
     //correct answer
        var correct= o[m]==s? 0: 1; 
    
        
   //testing
    myTrial = {
        condition: i,
        trial:2,
        trial_type: "Test",
        item_object:concept_all[i][3],
        item_sound:sound_test_all[i][3],
        concept_l:concept_all[i][o[0]],
        concept_r:concept_all[i][o[1]],
        sound:sound_test_all[i][s],
        sameDiff:'',
        correct:correct,
        concept_val:concept_all[i][2],
        sound_val:sound_test_all[i][2],
        experiment:'word'
    }
    
    myTrials.push(myTrial);
        
        
   }
    
      
}

myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "briefing",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        dist: '',
        condition:''
        });


/////////////////////////////////////
//THIS IS WHERE THE EXPERIMENT STARTS
////////////////////////////////////

showSlide("instructions");

// ## The main event

var experiment = {
    
  
  brief:{
    age:[],
    gender:[],
    native:[],
    problem:[],
    ifproblem:[],
    comment:[]
  },
    
  data :{
    condition:[],
    trial:[],  
    tri_type:[],
    item_object:[],
    item_sound:[],
    concept_val: [], 
    sound_val:[],
    sameDiff: [],
    answer:[],
    correct:[],
    experiment:[]
      
  },
  // Parameters for this sequence.
  trials: myTrials,
  // Experiment-specific parameters - which keys map to odd/even
  keyBindings: myKeyBindings,
  // The function that gets called when the sequence is finished.
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { 
        
            //Decrement 
            //if (turk.workerId.length > 0){
            //var xmlHttp = null;
            //xmlHttp = new XMLHttpRequest();
            //xmlHttp.open("GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
            //xmlHttp.send(null);
            //}
        turk.submit(experiment) }, 1500);
  },
  // The work horse of the sequence - what to do on every trial.
  next: function() {
    // If the number of remaining trials is 0, we're done, so call the end function.
    if (experiment.trials.length == 0) {
      experiment.end();
      return;
    }
    
    // Get the current trial - <code>shift()</code> removes the first element of the array and returns it.
    var current_trial = experiment.trials.shift();
    
        
    if (current_trial.trial_type == "scale") {
        
        showSlide("Task_instructions");
        
        
        var my_condition=current_trial.conditon
        
        if (my_condition=="example") {
            $("#MyTask").html(scale_inst_eg);
        }
        else {
            $("#MyTask").html(scale_inst);
        }
        
        var categ= current_trial.concept_l;     
        
        var mapToPic = {"fish": fish_continuum,
                        "bug": bug_continuum,
                        "flower": flower_continuum,
                        "bird": bird_continuum}
        
        var my_continuum = mapToPic[categ]
        //$('#continuum').empty()
       
        $('#continuum').html(my_continuum);
        
    }
    
            

 else if (current_trial.trial_type == "briefing")
        {
            showSlide("briefing");
            
            $( "#nextButton_brief" ).click(function() {
            
            experiment.brief.age.push(document.getElementById("age").value);
            experiment.brief.gender.push(document.getElementById("gender").value);
            experiment.brief.native.push(document.getElementById("native").value);
                
            experiment.brief.native.push(document.getElementById("second").value);
            experiment.brief.problem.push(document.getElementById("problem").value);
            experiment.brief.ifproblem.push(document.getElementById("ifproblem").value);
                
            experiment.brief.comment.push(document.getElementById("comment").value);

                
            });
        
        }

        
       
 else if (current_trial.trial_type == "Train" || current_trial.trial_type == "Train_pre" ) 
    {
        
        var current_concept_l= current_trial.concept_l;
        var current_concept_r= current_trial.concept_r;      
        var current_sound= current_trial.sound;
      

        
    showSlide("stage");
      
    
    //The following is how/when the sounds and objects are played/shown

        
    //play the first sound
    
    current_sound.get(0).play();
        
    $("#instruct_dynamic").html("Listen carefully!"); 
        
        
    current_sound.get(0).ontimeupdate = function() {
      $('#word_left').empty();  
      $('#word_right').empty();
      
      var category_l = current_concept_l.category;
      var prop1 = current_concept_l.prop;
    //var prop2 = 1 - prop1
      var prop2 = 0.5;
      var colo1 = current_concept_l.col1;
      var col = "#ffffff"
    
      //var categ_l = new Ecosystem.Genus(category_l, {col1:colo1, col2:colo1, col3:colo1, tar1:1, tar2:0 });
        
      category_l.draw('word_left', {prop1:prop1, prop2: prop2, col1:colo1, col2:colo1,col3:colo1,col4:colo1,tar1:0, tar2:0, tar3:0}, 1)
      
       //$("#pic_alien").html($alien[1]);
        
      showCurrent(this);
        var cur_time = this.currentTime;
        var duration = this.duration;
        
        if (cur_time > duration/2 ){
            
          $('#word_left').empty();
          //$("#pic_alien").html($alien[0]);
            
          $('#word_right').empty();
        
          var category_r = current_concept_r.category;
          var prop1 = current_concept_r.prop;
          var prop2 = 0.5
    //var prop2 = 1 - prop1
          var colo1 = current_concept_r.col1;
          var col = "#ffffff"
    
    
          category_r.draw('word_right', { 
                                prop1:prop1, prop2: prop2,
                                col1:colo1, col2:colo1, col3:colo1, col4:colo1,
                                tar1:0, tar2:0, tar3:0}, 0.5);
        
          
        }
    
    };
        
    current_sound.one('ended', function() {
 
    $('#word_right').empty(); 
        
    });
    
   
    
    // Get the current time so we can compute reaction time later.
    var startTime = (new Date()).getTime();
    
     setTimeout(experiment.next, 4000);
    
    }
    
      
    else if (current_trial.trial_type == "Test" || current_trial.trial_type == "Test_pre" ) 
        
    {
        
        var current_concept_l= current_trial.concept_l;
        var current_concept_r= current_trial.concept_r;
      
        var current_sound= current_trial.sound;
        
        
    showSlide("Testing");
      
        
    //The following is how/when the sounds and objects are played/shown
    ///////////////////////////////////////////////////////////////////
        

        
    //play the first sound
    current_sound.get(0).play();
        
    //while the first sound is playing, show the first object and hide the second object!
    current_sound.on('playing', function() {
        
    $('#word_l').empty(); 
    $('#word_r').empty(); 
        
    var category_l = current_concept_l.category;
    var category_r = current_concept_r.category;
        
    var colo1_l = current_concept_l.col1;
    var colo1_r = current_concept_r.col1;   
        
    var prop1_l = current_concept_l.prop;
    var prop2_l = 0.5

    
    var prop1_r = current_concept_r.prop;
    var prop2_r = 0.5    

    var col = "#ffffff"
    
    category_l.draw('word_l', { 
                                prop1:prop1_l, prop2: prop2_l,
                                col1:colo1_l, col2:colo1_l, col3:colo1_l,
                                col4:colo1_l,
                                tar1:0, tar2:0, tar3:0
                                }, 0.5);
        
    category_r.draw('word_r', { 
                                prop1:prop1_r, prop2: prop2_r,
                                col1:colo1_r, col2:colo1_r, col3:colo1_r,
                                col4:colo1_r,
                                tar1:0, tar2:0, tar3:0
                                }, 0.5);
    
        
    });
    
    
 
    // Get the current time so we can compute reaction time later.
    var startTime = (new Date()).getTime();
        
    var keyPressHandler_word = function(event) {
        
        var left_response = $(event.target).closest("div").is("#word_l");
    
        var right_response = $(event.target).closest("div").is("#word_r");
        
        if (!(left_response) && !(right_response)){
            $(document).one("click", keyPressHandler_word);
            
        } else {
            //left response is coded as 0
            //right response is coded as 1
            var userAnswer = left_response? 0: 1;      
  
        
        experiment.data.condition.push(current_trial.condition);
        experiment.data.trial.push(current_trial.trial);  
        experiment.data.tri_type.push(current_trial.trial_type);
        experiment.data.item_object.push(current_trial.item_object);  
        experiment.data.item_sound.push(current_trial.item_sound);
        experiment.data.concept_val.push(current_trial.concept_val);
        experiment.data.sound_val.push(current_trial.sound_val);
        experiment.data.answer.push(userAnswer);
        experiment.data.correct.push(current_trial.correct);
        experiment.data.sameDiff.push(current_trial.sameDiff);
        experiment.data.experiment.push(current_trial.experiment);
                
        // Wait 500 milliseconds before starting the next trial.
        setTimeout(experiment.next, 1000);
          
        $('#word_l').empty(); 
        $('#word_r').empty();
        
      }
    };
   
    setTimeout(function(){
    $(document).one("click", keyPressHandler_word);
    }, 500);
    
        
    
    }
      
    else {
          
           showSlide("Task_instructions");
            $("#MyTask").html(MyInstruct
                             [current_trial.trial_type]);
          
      }
  }    
    
  }


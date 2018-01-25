const mongoose = require('mongoose');
const Song = require('./models/song');
const Comment = require('./models/comment');


let songList = [

    {
      title: "Mighty is my God",
      theme: "Praise",
      worshipRating: 1,
      simplicityRating: 4,
      doctrineRating: 1,
      mood: ["Lively", "Fun"],
      source: "",
      author: "Don Moen, Eugene Greco, Gerrit Gustafson",
      "Date": ""
    },
    {
      title: "Fallng on my knees",
      theme: "Supplication",
      worshipRating: 2,
      simplicityRating: 4,
      doctrineRating: 1,
      mood: "Relaxed, Stirring",
      source: "https://www.youtube.com/watch?v=_AdaPNtBcM4",
      author: "",
      "Date": ""
    },
    {
      title: "God is Here",
      theme: "Call to Worship",
      worshipRating: 2,
      simplicityRating: 5,
      doctrineRating: 1,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=S27luprE2a8",
      author: "Darlene Zschech",
      "Date": ""
    },
    {
      title: "Set a fire",
      theme: "Supplication",
      worshipRating: 2,
      simplicityRating: 5,
      doctrineRating: 1,
      mood: "Stiring chorus",
      source: "https://www.youtube.com/watch?v=EN2L6uNXAqY",
      author: "Will Reagan",
      "Date": ""
    },
    {
      title: "Moving Forward",
      theme: "Hope in Christ",
      worshipRating: 3,
      simplicityRating: 4,
      doctrineRating: 1,
      mood: "",
      source: "https://www.youtube.com/watch?v=JO4ISkFGrEs&list=PL793B0645D1187F1D&index=7",
      author: "Walker / Houghton / Sanchez",
      "Date": ""
    },
    {
      title: "How deeply I need You",
      theme: "Commitment",
      worshipRating: 4,
      simplicityRating: 4,
      doctrineRating: 1,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=raOaMCjSvUM",
      author: "Darrell Evans",
      "Date": ""
    },
    {
      title: "I'll say yes Lord Yes",
      theme: "Commitment",
      worshipRating: 4,
      simplicityRating: 4,
      doctrineRating: 1,
      mood: "Bright",
      source: "",
      author: "Lynn Keesecker",
      "Date": ""
    },
    {
      title: "Jesus, You're the centre the my joy",
      theme: "Praise",
      worshipRating: 4,
      simplicityRating: 3,
      doctrineRating: 1,
      mood: "Ballad",
      source: "https://www.youtube.com/watch?v=4615qtT10Xs",
      author: "Richard Smallwood",
      "Date": ""
    },
    {
      title: "Night has passed morning has broken",
      theme: "Thanksgiving",
      worshipRating: 4,
      simplicityRating: 4,
      doctrineRating: 1,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=bOMF2slp090",
      author: "The Brilliance",
      "Date": ""
    },
    {
      title: "Our God is awesome",
      theme: "Praise",
      worshipRating: 4,
      simplicityRating: 5,
      doctrineRating: 1,
      mood: "Anthem",
      source: "https://www.youtube.com/watch?v=_YJ4vddbJJo",
      author: "Charles Jenkins",
      "Date": ""
    },
    {
      title: "Closer",
      theme: "Supplication - to know God's love",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 1,
      mood: "Stirring",
      source: "https://www.youtube.com/watch?v=jas8siNG3Bo",
      author: "Amanda Cook",
      "Date": ""
    },
    {
      title: "We need You Lord",
      theme: "Supplication",
      worshipRating: 5,
      simplicityRating: 5,
      doctrineRating: 1,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=9_muKAnm4gk",
      author: "Jonathan Butler",
      "Date": ""
    },
    {
      title: "With All I Am",
      theme: "I believe and belong in Jesus",
      worshipRating: 5,
      simplicityRating: 5,
      doctrineRating: 1,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=nTQEeYHNuZs&list=PLzvtfnvz2I21fVDDdrZFSoxuPW_umWm2h&index=5",
      author: "Reuben Morgan",
      "Date": ""
    },
    {
      title: "You are Good",
      theme: "Praise",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: 1,
      mood: "Lively",
      source: "https://www.youtube.com/watch?v=b-zGuoc9RKY",
      author: "Israel Houghton",
      "Date": ""
    },
    {
      title: "Let it happen",
      theme: "",
      worshipRating: 1,
      simplicityRating: 4,
      doctrineRating: 2,
      mood: "Soulful",
      source: "https://www.youtube.com/watch?v=bvsAV-MgGao",
      author: "Will Reagan",
      "Date": ""
    },
    {
      title: "He is exalted",
      theme: "Praise",
      worshipRating: 4,
      simplicityRating: 3,
      doctrineRating: 2,
      mood: "",
      source: "https://www.youtube.com/watch?v=0oE39oQR1pQ",
      author: "Sung by JJ Harison",
      "Date": ""
    },
    {
      title: "Jesus I come",
      theme: "Commitment to God",
      worshipRating: 4,
      simplicityRating: 3,
      doctrineRating: 2,
      mood: "Stirring",
      source: "https://www.youtube.com/watch?v=u-Af0DqZrSw",
      author: "",
      "Date": ""
    },
    {
      title: "You are my strength",
      theme: "Praise",
      worshipRating: 4,
      simplicityRating: 5,
      doctrineRating: 2,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=eeezo01meFA",
      author: "William Murphy",
      "Date": ""
    },
    {
      title: "All my hope",
      theme: "My hope is in the Lord",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 2,
      mood: "",
      source: "https://www.youtube.com/watch?v=ehIL0eJWmbI&list=PLzvtfnvz2I21fVDDdrZFSoxuPW_umWm2h&index=1",
      author: "David Crowder & Ed Cash",
      "Date": ""
    },
    {
      title: "As the deer",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: 2,
      doctrineRating: 2,
      mood: "Relaxed",
      source: "",
      author: "Martin Nystrom",
      "Date": ""
    },
    {
      title: "Beautiful Savior",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: 3,
      doctrineRating: 2,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=saK6vStMQ8U",
      author: "Henry Seeley",
      "Date": ""
    },
    {
      title: "Broken Vessels",
      theme: "",
      worshipRating: 5,
      simplicityRating: 3,
      doctrineRating: 2,
      mood: "",
      source: "https://www.youtube.com/watch?v=fiyYoe678yI",
      author: "Jonas Myrin, Joel Houston",
      "Date": ""
    },
    {
      title: "Good Good Father",
      theme: "God's love for us",
      worshipRating: 5,
      simplicityRating: 5,
      doctrineRating: 2,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=iBmwwwiHrOk&list=PLzvtfnvz2I21fVDDdrZFSoxuPW_umWm2h&index=24",
      author: "Pat Barrett & Tony Brown",
      "Date": ""
    },
    {
      title: "How Great is our God",
      theme: "God's goodness",
      worshipRating: 5,
      simplicityRating: 5,
      doctrineRating: 2,
      mood: "",
      source: "https://www.youtube.com/watch?v=xEmNb6NzpNg&list=PLzvtfnvz2I21fVDDdrZFSoxuPW_umWm2h&index=22",
      author: "Chris Tomlin, Jesse Reeves & Ed Cash",
      "Date": ""
    },
    {
      title: "In moments like these",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: 5,
      doctrineRating: 2,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=SAhlIHCZw5A",
      author: "Davin Graham",
      "Date": ""
    },
    {
      title: "Majesty, Majesty",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: 5,
      doctrineRating: 2,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=WEqQatxRCiw",
      author: "Michael W Smith",
      "Date": ""
    },
    {
      title: "Spirit of the Living God",
      theme: "",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 2,
      mood: "Traditional",
      source: "https://www.youtube.com/watch?v=BagH-zTfnsQ",
      author: "Daniel Iverson",
      "Date": ""
    },
    {
      title: "That's why we praise",
      theme: "Christ's sacrifice",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 2,
      mood: "Lively",
      source: "https://www.youtube.com/watch?v=Of9oGWhGV-o",
      author: "Tommy Walker",
      "Date": ""
    },
    {
      title: "Simple Gospel",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: 2,
      mood: "",
      source: "https://www.youtube.com/watch?v=DcJV7j5D3PU",
      author: "Will Reagan & Brock Human",
      "Date": ""
    },
    {
      title: "How Deep the fathers love for us",
      theme: "Salvation",
      worshipRating: 1,
      simplicityRating: 2,
      doctrineRating: 3,
      mood: "Stirirng, Traditional",
      source: "https://www.youtube.com/watch?v=e9FG12eTSbI",
      author: "Stuart Townend",
      "Date": ""
    },
    {
      title: "Majesty",
      theme: "Adoration",
      worshipRating: 1,
      simplicityRating: 5,
      doctrineRating: 3,
      mood: "",
      source: "https://www.youtube.com/watch?v=PF9ibH6EPz4",
      author: "Jack Hayford",
      "Date": ""
    },
    {
      title: "When we all get to heaven",
      theme: "Heaven",
      worshipRating: 1,
      simplicityRating: 1,
      doctrineRating: 3,
      mood: "Lively, Traditional",
      source: "",
      author: "Eliza Hewitt",
      "Date": ""
    },
    {
      title: "When I survey the wondrous cross",
      theme: "Adoration",
      worshipRating: 2,
      simplicityRating: 3,
      doctrineRating: 3,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=FhvXOIVsRv4",
      author: "Kathryn Scott",
      "Date": ""
    },
    {
      title: "Create in me a clean heart",
      theme: "Supplication - mercy",
      worshipRating: 4,
      simplicityRating: 3,
      doctrineRating: 3,
      mood: "Lively",
      source: "https://www.youtube.com/watch?v=ILRjmPGvVB8",
      author: "Donnie Mcclurkin",
      "Date": ""
    },
    {
      title: "Forever",
      theme: "Salvation",
      worshipRating: 4,
      simplicityRating: 4,
      doctrineRating: 3,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=huFra1mnIVE",
      author: "Kari Jobe and Johnson, Johnson, Gifford, Wilson, Taylor",
      "Date": ""
    },
    {
      title: "Mighty to Save",
      theme: "Salvation",
      worshipRating: 4,
      simplicityRating: 2,
      doctrineRating: 3,
      mood: "",
      source: "https://www.youtube.com/watch?v=9lgCRNepQzY&index=13&list=PLzvtfnvz2I21fVDDdrZFSoxuPW_umWm2h",
      author: "Ben Fielding & Reuben Morgan",
      "Date": ""
    },
    {
      title: "This is my Father's World",
      theme: "Praise",
      worshipRating: 4,
      simplicityRating: 3,
      doctrineRating: 3,
      mood: "Relaxed, Traditional",
      source: "https://www.youtube.com/watch?v=JEBmj7JO_Os",
      author: "Maltbie D. Babcock",
      "Date": ""
    },
    {
      title: "Blessing and Honour",
      theme: "Praise",
      worshipRating: 5,
      simplicityRating: 1,
      doctrineRating: 3,
      mood: "Lively",
      source: "",
      author: "Jamie Harvill & Gary Sadler",
      "Date": ""
    },
    {
      title: "Here I am to Worship",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 3,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=MAwYwhKJycE&index=16&list=PLzvtfnvz2I21fVDDdrZFSoxuPW_umWm2h",
      author: "Tim Hughes",
      "Date": ""
    },
    {
      title: "I love You Lord today",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: 5,
      doctrineRating: 3,
      mood: "",
      source: "",
      author: "William Hubbard",
      "Date": ""
    },
    {
      title: "Love so high",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 3,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=433LbfsUC68",
      author: "Matt Redman, Chris Tomlin, Jason Ingram, Reuben Morgan",
      "Date": ""
    },
    {
      title: "Because of who you are",
      theme: "God is worthy of Praise",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 3,
      mood: "",
      source: "https://www.youtube.com/watch?v=I9P1wdJqGdA",
      author: "Martha Munizzi",
      "Date": ""
    },
    {
      title: "I will bless the Lord",
      theme: "Praise",
      worshipRating: 1,
      simplicityRating: 5,
      doctrineRating: 4,
      mood: "Bright",
      source: "https://www.youtube.com/watch?v=_z2JOZ9h8MU",
      author: "Andrae Crouch",
      "Date": ""
    },
    {
      title: "Turn your eyes upon Jesus",
      theme: "Call to worship",
      worshipRating: 2,
      simplicityRating: 1,
      doctrineRating: 4,
      mood: "Traditional",
      source: "https://www.youtube.com/watch?v=j5qc0EcNgqw",
      author: "Helen Lemmel",
      "Date": ""
    },
    {
      title: "Soon and very soon",
      theme: "Return of Christ",
      worshipRating: 3,
      simplicityRating: 5,
      doctrineRating: 4,
      mood: "Lively, Traditional",
      source: "https://www.youtube.com/watch?v=lmGiu9JfbIs",
      author: "Andrae Crouch",
      "Date": ""
    },
    {
      title: "Above all",
      theme: "Adoration, Salvation",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 4,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=jp3SdSFz1L8",
      author: "Lenny LeBlanc",
      "Date": ""
    },
    {
      title: "Lamb of God",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: 3,
      doctrineRating: 4,
      mood: "Stirring, Traditional",
      source: "https://www.youtube.com/watch?v=IzgY2LIaPGA",
      author: "Twila Paris",
      "Date": ""
    },
    {
      title: "What a beautiful Name",
      theme: "",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 4,
      mood: "Relaxed",
      source: "http://www.worshiptogether.com/songs/what-a-beautiful-name-hillsong-worship/",
      author: "Brooke Ligertwood & Ben Fielding",
      "Date": ""
    },
    {
      title: "Worth Fighting for",
      theme: "Value of our life",
      worshipRating: 5,
      simplicityRating: 2,
      doctrineRating: 4,
      mood: "Soulful",
      source: "https://www.youtube.com/watch?v=tSD81hFaIjo",
      author: "Brian Courtney Wilson",
      "Date": ""
    },
    {
      title: "Your Word",
      theme: "God's word is our guide",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: 4,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=G9NEYy71lcU",
      author: "Chris Davenport",
      "Date": ""
    },
    {
      title: "This I believe (Creed)",
      theme: "Belief in Christ",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: 4,
      mood: "",
      source: "https://www.youtube.com/watch?v=4W4ssYO57jQ&index=14&list=PLzvtfnvz2I21fVDDdrZFSoxuPW_umWm2h",
      author: "Ben Fielding & Matt Crocker",
      "Date": ""
    },
    {
      title: "Days of Elijah",
      theme: "The last days",
      worshipRating: 1,
      simplicityRating: 3,
      doctrineRating: 5,
      mood: "Lively",
      source: "https://www.youtube.com/watch?v=6qXNduBdL8I",
      author: "Robin Mark",
      "Date": ""
    },
    {
      title: "Troublesome times are here",
      theme: "Christ's return",
      worshipRating: 1,
      simplicityRating: 2,
      doctrineRating: 5,
      mood: "Lively Traditional",
      source: "https://www.youtube.com/watch?v=cvx8blPKFBo",
      author: "R. E. Winsett",
      "Date": ""
    },
    {
      title: "Watch ye Saints",
      theme: "Christ's return",
      worshipRating: 1,
      simplicityRating: 2,
      doctrineRating: 5,
      mood: "Lively Traditional",
      source: "https://www.youtube.com/watch?v=mYIF5hINBNQ",
      author: "Phoebe Palmer",
      "Date": ""
    },
    {
      title: "Restore your Spirit",
      theme: "Righteousness by Faith",
      worshipRating: 5,
      simplicityRating: 5,
      doctrineRating: 5,
      mood: "Relaxed",
      source: "",
      author: "Keiran Mckenzie",
      "Date": ""
    },
    {
      title: "In the Sanctuary",
      theme: "Heavenly Sanctuary",
      worshipRating: "",
      simplicityRating: 3,
      doctrineRating: 5,
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=tkP8x56H4J4",
      author: "Layde & Reggie Smith",
      "Date": ""
    },
    {
      title: "In Christ Alone",
      theme: "Victory Christ",
      worshipRating: 4,
      simplicityRating: 2,
      doctrineRating: "4*",
      mood: "Stirirng",
      source: "",
      author: "Keith Getty & Stuart Townend",
      "Date": ""
    },
    {
      title: "Just for me",
      theme: "Power of the cross",
      worshipRating: 1,
      simplicityRating: 3,
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=ABP7wREZMKM",
      author: "Donnie Mcclurkin",
      "Date": ""
    },
    {
      title: "Lay it down",
      theme: "",
      worshipRating: 1,
      simplicityRating: 2,
      doctrineRating: "",
      mood: "Soulful",
      source: "https://www.youtube.com/watch?v=RNacm6zR8eU",
      author: "Will Reagan",
      "Date": ""
    },
    {
      title: "Draw me close",
      theme: "Supplication",
      worshipRating: 4,
      simplicityRating: "",
      doctrineRating: "",
      mood: "Relaxed",
      source: "",
      author: "Kelly Carpenter",
      "Date": ""
    },
    {
      title: "I surrender all",
      theme: "Commitment",
      worshipRating: 4,
      simplicityRating: "",
      doctrineRating: "",
      mood: "Traditional",
      source: "",
      author: "Judson Van DeVenter & Winfield Weeden",
      "Date": ""
    },
    {
      title: "Jesus, Name above all Names",
      theme: "Adoration",
      worshipRating: 4,
      simplicityRating: 4,
      doctrineRating: "",
      mood: "",
      source: "http://www.worshipsong.com/songs/songdetails/jesus-name-above-all-names",
      author: "Naida Hearn",
      "Date": ""
    },
    {
      title: "For Your Glory",
      theme: "Commitment to God",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: "",
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=aKetXJjMUZ0",
      author: "Mia Booker",
      "Date": ""
    },
    {
      title: "Head to the heart",
      theme: "",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=FSol3_QZaaI",
      author: "Will Reagan, Andrea Marie Reagan, Brock Human, & Michael Ketterer",
      "Date": ""
    },
    {
      title: "How great is the love",
      theme: "Thanksgiving",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: "",
      mood: "CCM",
      source: "https://www.youtube.com/watch?v=CqcWrSh0LZI",
      author: "Meredith Andres / Paul Baloche",
      "Date": ""
    },
    {
      title: "I love You Lord",
      theme: "Commitment",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "",
      author: "Laurie Klein",
      "Date": ""
    },
    {
      title: "Indescribable",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "",
      author: "Laura Story",
      "Date": ""
    },
    {
      title: "Lord we have come",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=2Y5X4lWFb8I",
      author: "Duane Sterling",
      "Date": ""
    },
    {
      title: "Seasons change",
      theme: "God's love for us",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: "",
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=F7k5pqBVinA",
      author: "Michael Ketterer",
      "Date": ""
    },
    {
      title: "Show me your ways",
      theme: "Supplication",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=yDKappAASZM",
      author: "Russell Fragar",
      "Date": ""
    },
    {
      title: "There is none like You",
      theme: "Adoration",
      worshipRating: 5,
      simplicityRating: 4,
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=KnhUh2tt97Q",
      author: "Lenny LeBlanc",
      "Date": ""
    },
    {
      title: "Yahweh",
      theme: "",
      worshipRating: 5,
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=l-YdYwEzFEw",
      author: "Jane Williams, Matthew Ntele & Steven Furtick",
      "Date": ""
    },
    {
      title: "Are You listening",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=LswIctIuq68",
      author: "Brock Human",
      "Date": ""
    },
    {
      title: "Blessed be the Name of the Lord",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "",
      author: "Matt Redman",
      "Date": ""
    },
    {
      title: "Break every chain",
      theme: "Supplication",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "Stirring",
      source: "https://www.youtube.com/watch?v=-pD2zIuiC2g",
      author: "Will Reagan",
      "Date": ""
    },
    {
      title: "Hidden",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=cqa8O1ktxk8",
      author: "Will Reagan",
      "Date": ""
    },
    {
      title: "Holy is the Lord God almighty",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=goNmgwCJs-w",
      author: "Chris Tomlin, Louis Giglio",
      "Date": ""
    },
    {
      title: "I give myself away",
      theme: "Commitment",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "Relaxed",
      source: "https://www.youtube.com/watch?v=J4v5IXbEauM&index=11&list=PL793B0645D1187F1D",
      author: "William Mcdowell",
      "Date": ""
    },
    {
      title: "It is well",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=YNqo4Un2uZI",
      author: "Kristene DiMarco",
      "Date": ""
    },
    {
      title: "Jesus, what a beautiful name",
      theme: "Adoration",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://youtu.be/azlhQQVx8qY",
      author: "Tanya Riches",
      "Date": ""
    },
    {
      title: "Let Your living waters",
      theme: "Supplication",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=OrYmIXiB2dQ",
      author: "John Watson, Vinesong",
      "Date": "https://www.youtube.com/watch?v=iEPclC92yLg"
    },
    {
      title: "Lord I give You my heart",
      theme: "Commitment to God",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "Relaxed",
      source: "https://youtu.be/obi5ZGujiuU",
      author: "Reuben Morgan",
      "Date": ""
    },
    {
      title: "Lord prepare me",
      theme: "Supplication",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "",
      author: "Ilan, Shmuel & Ruven Flaishler & Rachel Moulden",
      "Date": ""
    },
    {
      title: "Mighty Cross",
      theme: "Power of the cross",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=yI_SQrRUOt0",
      author: "Jane Williams, Matthew Ntele & Jason Ingram",
      "Date": ""
    },
    {
      title: "No longer slaves",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=f8TkUMJtK5k",
      author: "Jonathan Helser, Brian Johnson & Joel Case",
      "Date": ""
    },
    {
      title: "Open the eyes of my heart Lord",
      theme: "Supplication",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "",
      author: "Paul Baloche",
      "Date": ""
    },
    {
      title: "Purify my heart",
      theme: "Supplication",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=9Y8zP34AhuU",
      author: "Brian Doerksen",
      "Date": ""
    },
    {
      title: "Redeemed",
      theme: "Salvation",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "Traditional",
      source: "",
      author: "Frances Crosby",
      "Date": ""
    },
    {
      title: "Thank You for loving me",
      theme: "Thanksgiving",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://youtu.be/X5aZf79y7aQ",
      author: "Mitchell Jones, Karl Reid, Chris Poole, Marcus Cole",
      "Date": ""
    },
    {
      title: "There's something about that Name",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=5G8b_QiXz4c",
      author: "Bill & Gloria Gaither",
      "Date": ""
    },
    {
      title: "Wonderful Merciful Saviour",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "",
      author: "Dawn Rodgers",
      "Date": ""
    },
    {
      title: "You are God alone",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=PHgTlbXuAgI",
      author: "Billy & Ciny Foote, William Mcdowell",
      "Date": ""
    },
    {
      title: "You are love and love alone",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "Soulful",
      source: "https://www.youtube.com/watch?v=pxGHh2l2qfk",
      author: "David Leonard, Leslie Jordan",
      "Date": ""
    },
    {
      title: "One day (When we all get to heaven)",
      theme: "Heaven and Salvation",
      worshipRating: 5,
      simplicityRating: 3,
      doctrineRating: "",
      mood: "Acoustic",
      source: "https://www.youtube.com/watch?v=LGAdaGbmfFs",
      author: "Matt Redman",
      "Date": "2017-05-09T23:00:00.000Z"
    },
    {
      title: "Beautiful Exchange",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=r-bUZj1bkoE",
      author: "Joel Houston",
      "Date": ""
    },
    {
      title: "Your ways of loving us",
      theme: "",
      worshipRating: "",
      simplicityRating: "",
      doctrineRating: "",
      mood: "",
      source: "https://www.youtube.com/watch?v=wGR37Vj9rgE",
      author: "Matt Redman",
      "Date": "2017-05-09T23:00:00.000Z"
    }
  ]


function seedDB(){
  //Remove all songs
  Song.remove({}, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("removed all songs");

      //add new songs
      songList.forEach(function(song){
        song.worshipRating = Number(song.worshipRating);
        song.simplicityRating = Number(song.simplicityRating);
        song.doctrineRating = Number(song.doctrineRating);
        song.theme = [song.theme];
        song.mood = [song.mood];
        console.log(song);
        Song.create(song, function(err, song){
          if(err){
            console.log(err);
          } else {
            console.log("Songs added to database!");
          }
        });
      });

    }
  });

};

module.exports = seedDB;

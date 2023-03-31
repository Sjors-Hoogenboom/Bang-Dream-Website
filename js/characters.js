document.addEventListener("DOMContentLoaded", function() {
   
const characters = [
{
    name: "Kasumi Toyama",
    band: "Poppin'Party",
    role: "guitarist, vocalist and leader",
    bio: "As guitarist and vocalist for Poppin'Party, she brims with energy and positivity. Because she is highly intuitive, she constantly finds sparkling and heart-pounding inspirations to make into songs. She is not afraid to communicate and is always surrounded by friends.",
    img: "/img/characters/Kasumi_Toyama.png",
    voice: "/voices/Kasumi_Toyama_voice.m4a"
},
{
    name: "Rimi Ushigome",
    band: "Poppin'Party",
    role: "bassist",
    bio: "She's shy, but her particularity when it comes to music and her love for Yamabuki Bakery's chocolate cornets are unmatched. She lived in Kansai until partway through middle school, and her accent sometimes slips out when she is excited or flustered.",
    img: "/img/characters/Rimi_Ushigome.png",
    voice: "/voices/Rimi_Ushigome_voice.m4a"
},
{
    name: "Saya Yamabuki",
    band: "Poppin'Party",
    role: "drummer",
    bio: "On top of her high-school studies, she also helps out at her family business, Yamabuki Bakery, located downtown. Her calm personality serves as an emotional pillar for Poppin'Party. She still gets along with the members of her previous band.",
    img: "/img/characters/Saya_Yamabuki.png",
    voice: "/voices/Saya_Yamabuki_voice.m4a"
},
{
    name: "Arisa Ichigaya",
    band: "Poppin'Party",
    role: "keyboardist",
    bio: "Arisa's grandmother runs the pawn shop Ryuseido. She was an indoor girl until she joined the band and started making friends. Now she is part of the student council at Hanasakigawa. Her tongue is still sharp when talking to Kasumi, but sometimes, she shows her true feelings.",
    img: "/img/characters/Arisa_Ichigaya.png",
    voice: "/voices/Arisa_Ichigaya_voice.m4a"
},   
{
    name: "Tae Hanazono",
    band: "Poppin' party",
    role: "guitarist",
    bio: "A skilled guitarist who started playing as a kid. Before joining the band, she spent a lot of time on her own. After being overwhelmed by the enjoyment of performing with others, she joined Poppin'Party. She takes things at her own pace and has somewhat of an airheaded personality.",
    img: "/img/characters/Tae_Hanazono.png",
    voice: "/voices/Tae_Hanazono_voice.m4a"
},
{
    name: "Ran Mitake",
    band: "Afterglow",
    role: "guitarist, vocalist and leader",
    bio: "Ran's family has a 100-year history as experts in the Japanese art of flower arranging. She is strong-willed and normally seems calm, but she has an unrivaled fire burning in her heart. She overcame her issues with her father and is able to take on flower arranging now. Her four childhood friends are precious to her.",
    img: "/img/characters/Ran_Mitake.png",
    voice: "/voices/Ran_Mitake_voice.m4a"
},
{
    name: "Himari Uehara",
    band: "Afterglow",
    role: "bassist",
    bio: "A cheerful girl who wears her heart on her sleeve and has the power to brighten the mood. She is the leader of Afterglow, is very social, and can become friends with anyone. Her enthusiasm can sometimes send her running in circles. She loves being fashionable and keeps up with the latest trends.",
    img: "/img/characters/Himari_Uehara.png",
    voice: "/voices/Himari_Uehara_voice.m4a"
},
{
    name: "Tsugumi Hazawa",
    band: "Afterglow",
    role: "keyboardist",
    bio: "Surrounded by fairly unique members is a very normal girl. She always puts her best foot forward and works her hardest while keeping positive. She is never discouraged by smaller issues, and though she may not realize it, she often motivates her bandmates to take on new challenges.",
    img: "/img/characters/Tsugumi_Hazawa.png",
    voice: "/voices/Tsugumi_Hazawa_voice.m4a"
},
{
    name: "Tomoe Udagawa",
    band: "Afterglow",
    role: "drummer",
    bio: "Without anyone noticing, she holds Afterglow together. She has an easygoing personality and does not badmouth anyone. She has also gained the trust of the adults downtown. She and her younger sister, Ako, see each other as rivals but also get along very well.",
    img: "/img/characters/Tomoe_Udagawa.png",
    voice: "/voices/Tomoe_Udagawa_voice.m4a"
},
{
    name: "Moca Aoba",
    band: "Afterglow",
    role: "guitarist",
    bio: "She becomes extremely absorbed in the things and people she likes, but is indifferent to anything else and cannot be bothered to change her behavior for those things. She likes to carry out things to their fullest. One example is guitar playing, and she uses her instrument to create \"deep\" melodies.",
    img: "/img/characters/Moca_Aoba.png",
    voice: "/voices/Moca_Aoba_voice.m4a"
},
{
    name: "Aya Maruyama",
    band: "Pastel Palettes",
    role: "vocalist and leader",
    bio: "A former idol-in-training, Aya has broken into the entertainment industry with a strong admiration for idols. The members around her are influenced by her determination and optimism. She has grown greatly as an idol in the past year but still has trouble on the day of performances and with improvising.",
    img: "/img/characters/Aya_Maruyama.png",
    voice: "/voices/Aya_Maruyama_voice.m4a"
},
{
    name: "Chisato Shirasagi",
    band: "Pastel Palettes",
    role: "bassist",
    bio: "An actress since she was young, and an idol. Normally calm and practical, she keeps the other members in line whenever they get out of hand, which is often. Watching Aya strive toward her dream has influenced Chisato to try and find one of her own.",
    img: "/img/characters/Chisato_Shirasagi.png",
    voice: "/voices/Chisato_Shirasagi_voice.m4a"
},
{
    name: "Eve Wakamiya",
    band: "Pastel Palettes",
    role: "keyboardist",
    bio: "A former model with a Japanese father and a Finnish mother. She adores Japanese culture and studies it every day, though she tends to get things wrong every now and then... \"Bushido\" is her favorite word, and she trains daily to become a great samurai.",
    img: "/img/characters/Eve_Wakamiya.png",
    voice: "/voices/Eve_Wakamiya_voice.m4a"
},
{
    name: "Maya Yamato",
    band: "Pastel Palettes",
    role: "drummer",
    bio: "Former session musician and current tech geek. Though she was initially worried about being an idol, she has gained experience and is slowly building up confidence. Her unique laugh, 'huhehe,' slips out whenever she gets excited.",
    img: "/img/characters/Maya_Yamato.png",
    voice: "/voices/Maya_Yamato_voice.m4a"
},
{
    name: "Hina Hikawa",
    band: "Pastel Palettes",
    role: "guitarist",
    bio: "Haneoka's student-council president and a genius. She loves things that are boppin'♪ She can be a troublemaker sometimes, but she treasures Pastel＊Palettes. She has the peculiar ability to be intrigued by things she doesn't understand.",
    img: "/img/characters/Hina_Hikawa.png",
    voice: "/voices/Hina_Hikawa_voice.m4a"
},
{
    name: "Yukina Minato",
    band: "Roselia",
    role: "vocalist and leader",
    bio: "A bold and commanding aura surrounds Roselia's songstress. She keeps her composure well and is unquestionably skilled, so much so that those from the music industry take notice. She heavily focuses on music and has little interest in anything else.",
    img: "/img/characters/Yukina_Minato.png",
    voice: "/voices/Yukina_Minato_voice.m4a"
},
{
    name: "Sayo Hikawa",
    band: "Roselia",
    role: "guitarist",
    bio: "A serious girl who is hard on herself and others. She is part of the disciplinary committee at school. Previously, she had been putting distance between herself and her sister, but they are slowly recreating the sisterly relationship they used to have. She is currently searching for her own sound.",
    img: "/img/characters/Sayo_Hikawa.png",
    voice: "/voices/Sayo_Hikawa_voice.m4a"
},
{
    name: "Ako Udagawa",
    band: "Roselia",
    role: "drummer",
    bio: "A cheerful girl who's easy to get along with and serves as the little sister of her band. She has a strong admiration for things that are cool and judges everything by how cool it is. This is reflected in the dramatic statements she chooses to make, but her lack of vocabulary means they usually end disappointingly.",
    img: "/img/characters/Ako_Udagawa.png",
    voice: "/voices/Ako_Udagawa_voice.m4a"
},
{
    name: "Rinko Shirokane",
    band: "Roselia",
    role: "keyboardist",
    bio: "The shy and docile student council president of Hanasakigawa. She's bad at arguing for her own beliefs, but she's challenging herself to try new things in order to change that. She may be timid for the most part, but there are times when she shows heart.",
    img: "/img/characters/Rinko_Shirokane.png",
    voice: "/voices/Rinko_Shirokane_voice.m4a"
},
{
    name: "Lisa Imai",
    band: "Roselia",
    role: "bassist",
    bio: "Others tend to misjudge her because of her flashy appearance, but she's compassionate and loves taking care of others. She has a lot of friends because of her natural ability to socialize. She provides emotional support for Roselia, and her bandmates put their trust in her.",
    img: "/img/characters/Lisa_Imai.png",
    voice: "/voices/Lisa_Imai_voice.m4a"
},
{
    name: "Kokoro Tsurumaki",
    band: "Hello Happy World!",
    role: "vocalist and leader",
    bio: "A girl who loves to see others smile and is curious by nature. Her eyes glimmer with excitement on her neverending search for fun things to do. Being the only daughter of well-off parents has allowed her unrealistic ideas to be brought to life.",
    img: "/img/characters/Kokoro_Tsurumaki.png",
    voice: "/voices/Kokoro_Tsurumaki_voice.m4a"
},
{
    name: "Hagumi Kitazawa",
    band: "Hello Happy World!",
    role: "bassist",
    bio: "She's happy, animated, and has a genuine heart. Her parents run a shop that sells meat products and is famous for its croquettes. She cherishes her neighborhood and friends, and the people downtown love her. With her lightning-fast reflexes, she became the ace and captain of the local softball team.",
    img: "/img/characters/Hagumi_Kitazawa.png",
    voice: "/voices/Hagumi_Kitazawa_voice.m4a"
},
{
    name: "Misaki Okusawa",
    band: "Hello Happy World!",
    role: "DJ",
    bio: "The DJ for Hello, Happy World! Her role as a mascot is unshakeable.",
    img: "/img/characters/Misaki_Okusawa.png",
    voice: "/voices/Misaki_Okusawa_voice.m4a"
},
{
    name: "Kaoru Seta",
    band: "Hello Happy World!",
    role: "guitarist",
    bio: "The star of Haneoka Girls' Academy and a member of the theater club who has taken on many roles. Kaoru is constantly surrounded by her fans. She often quotes flowery language and Shakespeare, but she doesn't necessarily understand what she's saying.",
    img: "/img/characters/Kaoru_Seta.png",
    voice: "/voices/Kaoru_Seta_voice.m4a"
},
{
    name: "Kanon Matsubara",
    band: "Hello Happy World!",
    role: "keyboardist",
    bio: "Once a shy and often hesitant girl, Kanon was able to find the courage to speak her mind after meeting Kokoro and the others. However, she is still clumsy, bad with directions, and has a difficult time turning people down.",
    img: "/img/characters/Kanon_Matsubara.png",
    voice: "/voices/Kanon_Matsubara_voice.m4a"
},
{
    name: "Mashiro Kurata",
    band: "Morfonica",
    role: "vocalist",
    bio: "A meek and mature young girl. She managed to get into her dream school Tsukinomori but felt discouraged after seeing the talented student body. However, since joining her band, her outlook has begun to change. She is the lyricist for the band and possesses a very active imagination. This does cause her to daydream frequently, though.",
    img: "/img/characters/Mashiro_Kurata.png",
    voice: "/voices/Mashiro_Kurata_voice.m4a"
},
{
    name: "Rui Yashio",
    band: "Morfonica",
    role: "violinist",
    bio: "An intelligent girl whose grades have kept her at the top of her class. She has a dry personality and aims to always be the best. She once quit violin after judging it as meaningless. However, she has since returned to the world of music after meeting Mashiro and the others. She is in charge of composing music for the band.",
    img: "/img/characters/Rui_Yashio.png",
    voice: "/voices/Rui_Yashio_voice.m4a"
},
{
    name: "Nanami Hiromachi",
    band: "Morfonica",
    role: "bassist",
    bio: "A strange girl who dreams of being normal. Aware of how different she really is, she hides her true self and tries to blend in with her peers. She joined the band because of the popularity of the girls band trend. She hopes to enjoy a normal high-schooler life through the band.",
    img: "/img/characters/Nanami_Hiromachi.png",
    voice: "/voices/Nanami_Hiromachi_voice.m4a"
},
{
    name: "Tsukushi Futaba",
    band: "Morfonica",
    role: "drummer and leader",
    bio: "The class president, filled with confidence. She works hard to be the band's leader and a good role model, but she still tends to make mistakes here and there. She hopes to one day become someone others can rely on.",
    img: "/img/characters/Tsukushi_Futaba.png",
    voice: "/voices/Tsukushi_Futaba_voice.m4a"
},
{
    name: "Toko Kirigaya",
    band: "Morfonica",
    role: "guitarist",
    bio: "A popular girl both at school and online. She has a bright and sunny personality, but her tendency to play things by ear frquently results in her dragging others into her antics. Perhaps surprisingly, she comes from a well-off family that has run a kimono shop for generations.",
    img: "/img/characters/Toko_Kirigaya.png",
    voice: "/voices/Toko_Kirigaya_voice.m4a"
},
{
    name: "Rei Wakana",
    band: "Raise a suilen",
    role: "vocalist and bassist",
    bio: "Calm and mature. When it comes to relationships with others, she prefers to keep her distance. She worked as a temporary vocalist for various bands before joining RAS. Her singing has been highly regarded since her time at music school, where she met and befriended Poppin'Party's Tae Hanazono.",
    img: "/img/characters/Rei_Wakana.png",
    voice: "/voices/Rei_Wakana_voice.m4a"
},
{
    name: "Reona Nyubara",
    band: "Raise a suilen",
    role: "keyboardist and vocalist",
    bio: "Loves cute things and always acts cheerful. Her favorite band is Pastel＊Palettes. She feels deeply grateful to CHU² for scouting her to join RAS. She looks after CHU² and calls her CHU²-sama and master.",
    img: "/img/characters/Reona_Nyubara.png",
    voice: "/voices/Reona_Nyubara_voice.m4a"
},
{
    name: "Masuki Satou",
    band: "Raise a suilen",
    role: "drummer",
    bio: "Appears gruff but is passionate and caring. The daughter of the owner of the live house Galaxy. She started playing the drums to be like her drummer father. Although skilled, no other bands wanted her because when she gets excited, she will do difficult, improvised performances with no regard for the other members.",
    img: "/img/characters/Masuki_Satou.png",
    voice: "/voices/Masuki_Satou_voice.m4a"
},
{
    name: "Chiyu Tamade",
    band: "Raise a suilen",
    role: "DJ and leader",
    bio: "Used to live overseas and goes to an international school. A fourteen-year-old who has skipped a grade due to her excellent grades. She's a skilled producer who also writes the lyrics and music for her band. Although she's confident and has a high sense of professionalism, she can be childish at times. Loves jerky.",
    img: "/img/characters/Chiyu_Tamade.png",
    voice: "/voices/Chiyu_Tamade_voice.m4a"
},
{
    name: "Rokka Asahi",
    band: "Raise a suilen",
    role: "guitarist",
    bio: "Always does her best. A huge Poppin'Party fan who moved from Gifu to Tokyo after seeing them at a concert. Her Gifu dialect sometimes slips out. Her family runs the Asahi Bathhouse. She lives and works there while also working part-time at the live house Galaxy.",
    img: "/img/characters/Rokka_Asahi.png",
    voice: "/voices/Rokka_Asahi_voice.m4a"
}
  ];


  const container = document.querySelector('main.container');

  let counter = 1;

  characters.forEach((item) => {

    const header = document.createElement("header");
    header.classList.add("reverse-card");
  
    const section = document.createElement("section");
    section.classList.add("reverse-card-inner");
    section.setAttribute("id", "play_" + counter);
  
    const front = document.createElement("article");
    front.classList.add("reverse-card-front");
  
    const img = document.createElement("img");
    img.classList.add("img_character");
    img.src = item.img;

    const audio = document.createElement("audio");

    const audio_source = document.createElement("source");
    audio_source.src = item.voice;

    audio.appendChild(audio_source);

    front.appendChild(img);
  
    const back = document.createElement("article");
    back.classList.add("reverse-card-back");
  

    const characterBio = document.createElement("article");
    characterBio.classList.add("card-text");

    const bandRole = document.createElement("h3");
    bandRole.classList.add("band_role");
    bandRole.textContent = item.role;

    const character_description = document.createElement("p");
    character_description.innerHTML = item.bio;

    characterBio.appendChild(bandRole);
    characterBio.appendChild(character_description);


    const topCard = document.createElement("section");
    topCard.classList.add("top-card");

    back.appendChild(topCard);

    const band = document.createElement("h2");
    band.classList.add("band_name");
    band.innerHTML = item.band;
  
    const name = document.createElement("h1");
    name.classList.add("character_name");
    name.innerHTML = item.name;

    topCard.appendChild(band);
    topCard.appendChild(name);
    
    back.appendChild(characterBio);
  
    section.appendChild(front);
    section.appendChild(audio);
    section.appendChild(back);
  
    header.appendChild(section);
  
    container.appendChild(header);

    counter++;
  });
});
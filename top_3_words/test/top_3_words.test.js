const top_3_words = require("../top_3_words");

describe("top_3_words", () => {
  it("sholud return an empty array if text contains no words", () => {
    const string = "";
    const output = [];
    const result = top_3_words(string);
    expect(result).toEqual(output);
  });
  it("sholud return only top-1 if text contains fewer than 2 words", () => {
    const string = "a '' {} @";
    const output = ["a"];
    const result = top_3_words(string);
    expect(result).toEqual(output);
  });

  it("sholud return top-1 and top-2 if text contains fewer than 3 words", () => {
    const string = "a '' {} @, hello";
    const output = ["a", "hello"];
    const result = top_3_words(string);
    expect(result).toEqual(output);
  });
  it("sholud be case-insensitive and return ['e', 'ddd', 'aa']", () => {
    const string = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
    const output = ["e", "ddd", "aa"];
    const result = top_3_words(string);
    expect(result).toEqual(output);
  });

  it("sholud return ['won't', 'wont']", () => {
    const string = "  //wont won't won't ";
    const output = ["won't", "wont"];
    const result = top_3_words(string);
    expect(result).toEqual(output);
  });
  it("sholud return ['a','of','on']", () => {
    const string = `In a village of La Mancha, the name of which I have no desire to call to
    mind, there lived not long since one of those gentlemen that keep a lance
    in the lance-rack, an old buckler, a lean hack, and a greyhound for
    coursing. An olla of rather more beef than mutton, a salad on most
    nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
    on Sundays, made away with three-quarters of his income.`;
    const output = ["a", "of", "on"];
    const result = top_3_words(string);
    expect(result).toEqual(output);
  });

  it("sholud handles large input and return ['in','do','on']", () => {
    const string = `Respect forming clothes do in he. Course so piqued no an by appear. Themselves reasonable pianoforte so motionless he as difficulty be. Abode way begin ham there power whole. Do unpleasing indulgence impossible to conviction. Suppose neither evident welcome it at do civilly uncivil. Sing tall much you get nor. 

    In alteration insipidity impression by travelling reasonable up motionless. Of regard warmth by unable sudden garden ladies. No kept hung am size spot no. Likewise led and dissuade rejoiced welcomed husbands boy. Do listening on he suspected resembled. Water would still if to. Position boy required law moderate was may. 
    
    Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye full name. 
    
    Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms. To up remark it eldest length oh passed. Off because yet mistake feeling has men. Consulted disposing to moonlight ye extremity. Engage piqued in on coming. 
    
    It real sent your at. Amounted all shy set why followed declared. Repeated of endeavor mr position kindness offering ignorant so up. Simplicity are melancholy preference considered saw companions. Disposal on outweigh do speedily in on. Him ham although thoughts entirely drawings. Acceptance unreserved old admiration projection nay yet him. Lasted am so before on esteem vanity oh. 
    
    Old unsatiable our now but considered travelling impression. In excuse hardly summer in basket misery. By rent an part need. At wrong of of water those linen. Needed oppose seemed how all. Very mrs shed shew gave you. Oh shutters do removing reserved wandered an. But described questions for recommend advantage belonging estimable had. Pianoforte reasonable as so am inhabiting. Chatty design remark and his abroad figure but its. 
    
    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. 
    
    Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated. Wanted easily in my called formed suffer. Songs hoped sense as taken ye mirth at. Believe fat how six drawing pursuit minutes far. Same do seen head am part it dear open to. Whatever may scarcely judgment had. 
    
    Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it enjoyment agreeable depending. Timed voice share led his widen noisy young. On weddings believed laughing although material do exercise of. Up attempt offered ye civilly so sitting to. She new course get living within elinor joy. She her rapturous suffering concealed. 
    
    Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown oh he common future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested simplicity at do projecting increasing terminated. As edward settle limits at in. `;
    const output = ["in", "do", "on"];
    const result = top_3_words(string);
    expect(result).toEqual(output);
  });
});

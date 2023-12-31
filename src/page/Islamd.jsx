import React from 'react'
import videotfat from "../assets/video/fateha.mp4"
import videotfalaq from "../assets/video/falaq.mp4"
import videotnas from "../assets/video/nas.mp4"
import videotik from "../assets/video/ikhlas.mp4"


const Islamd = () => {
    
    
    const videos = [
        { id: 'videoJ', title: ' سورة الفاتحة ', source: videotfat ,customText:"سورة الفاتحة مكية - أي نزلت على النبي محمد- صلى الله عليه وسلم قبل الهجرة وأثناء وجوده في مكة - وهي فاتحة القرآن الكريم وأول سور القرآن ترتيبا وأول سورة يتعلمها الطفل وترتيبها الخامس من حيث ترتيب النزول، وتتكون من سبع آيات مع البسملة، وأطلق عليها بعض الأسماء الأخرى، مثل فاتحة الكتاب والسبع المثاني  وأم القرآن وأم الكتاب والكافية والحمد. وتعد ركناً رئيساً من أركان الصلاة، إذ إن سورة الفاتحة تقرأ في أول كل صلاة، وقال النبي - صلى الله عليه وسلم: ألا أعلِّمُك أعظمَ سورةٍ في القرآنِ قبل أن تخرج من المسجدِ. فأخذ بيديَّ، فلما أردْنا أن نخرج، قلتُ: يا رسولَ اللهِ، إنك قلتَ: لأعلِّمنَّك أعظمَ سورةٍ من القرآن. قال: الحمْدُ للهِ رَبِّ العَالمِينَ. هي السبعُ المثاني، والقرآنُ العظيمُ الذي أوتيتُه- (صحيح: أخرجه البخاري من حديث أبي سعيد بن المعلى)، وعن عبد الله بن عباس -رضي الله عنه- قال: بينَما رسولُ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ وعندَهُ جبريلُ عليهِ السَّلامُ إذ سمعَ نَقيضًا فوقَهُ فرفعَ جبريلُ عليهِ السَّلامُ بصرَهُ إلى السَّماءِ فقالَ هذا بابٌ قد فُتِحَ منَ السَّماءِ ما فُتِحَ قطُّ قالَ فنزلَ منهُ ملَكٌ فأتى النَّبيَّ صلَّى اللَّهُ عليهِ وسلَّمَ فقالَ أبشِر بنورينِ أوتيتَهُما لم يؤتَهُما نبيٌّ قبلَكَ فاتحةِ الكتابِ وخواتيمِ سورةِ البقرةِ، لم تقرَأْ حرفًا منهما إلَّا أُعطيتَهُ - صحيح النسائي.",customTitle:"سورة الفاتحة"},
        { id: 'video', title: ' سورة الناس ', source: videotnas , customText:"تعد سورة الناس من قصار السور في الجزء الثلاثين من القرآن الكريم وهي السورة الرابعة عشر بعد المئة أي آخر سورة في ترتيب القرآن الكريم. وهي سورة مكية أيتم نزولها على رسولنا الكريم محمد - صلى الله عليه وسلم - قبل الهجرة إلى المدينة. تتكون سورة الناس من ست آيات كلها آيات قصيرة. تتحدث السورة الكريمة عن أمر الله عز وجل لنبيه الكريم سيدنا محمد - صلى الله عليه وسلم - بأن يتعوذ بالله سبحانه رب الناس. و قد ورد في العديد من الأحاديث النبوية الشريفة فضل قراءة المعوذتين (الفلق والناس) مع سورة الإخلاص ثلاث مرات كل يوم مع أذكار الصباح وأذكار المساء وكذلك عند النوم كان رسول الله - صلى الله عليه وسلم - إذا آوى إلى فراشه قرأ سورتي الناس والفلق ونفث في يديه و مسح بهما على جسده.ويوصى بقراءة المعوذتين في ختام كل صلاة. والمقصود من سورة الناس هو الدعوة إلى التوحيد بالله، واللجوء للهِ عز وجل، والتَحصين بالله فقط أي اللجوء لله فقط لحمايتنا من شر كل شيطان ومن شر الإنس والجن.",customTitle:"سورة الناس"},
        { id: 'videojJ', title: ' سورة الفلق ', source: videotfalaq ,customText:"أُنزلت سورة الفلق بالترتيب بعد سورة الفيل. تبدأ سورة الفلق بقوله تعالى قل أعوذُ برب الفلق وتعد سورة الفلق سورة مدنية، بمعنى أنها أُنزلت على الرسول محمد- صلى الله عليه وسلم- بعد هجرته من مكة إلى المدينة. عدد آياتها خمس آيات فهي تعد من قصار السور في الجزء الثلاثين من القرآن الكريم. ويأتي ترتيبها في القرآن الكريم بعد سورة الإخلاص",customTitle:"سورة الفلق"},
        { id: 'videokJ', title: ' سورة الأخلاص ', source: videotik ,customText:"تُعد سورة الإخلاص من قِصار السور والتي تُعرِّف بالله -عز وجل- تعريفاً مختصراً، ويغلب القول بأنَّها من السور المكية التي نزلت على الرسول -صلى الله عليه وسلم- في مكة المكرمة، ويرجع السبب في ذلك إلى كون آياتها تتحدث عن توحيد الله وتفرده بصفات الكمال والألوهية، وهذا كان محور ومرتكز دعوته -صلى الله عليه وسلم- في مكة المكرمة.",customTitle:"سورة الأخلاص"}
     , ]
    
    const handleNextClick = (videoId) => {
        const nextVideoElement = document.getElementById(videoId);
        if (nextVideoElement) {
          nextVideoElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
  return (
    <div>
      <div className='n1'>
        {videos.map((videoItem) => (
          <div key={videoItem.id} className='video-card'>
            <h2 style={{ fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' ,textShadow: '2px 2px 4px rgba(50, 50, 70, 0.5)',fontSize:"40px"}}>{videoItem.customTitle}</h2>
            <div className='video-container'>
              <video id={videoItem.id} width="640" height="360" controls>
                <source src={videoItem.source} type="video/mp4" />
                يتعذر تشغيل الفيديو.
              </video>
            </div>
            <p id="pp"style={{ textAlign: "right", padding: '20px' }}>{videoItem.customText}</p>

            <br />
            <h1
              style={{ color: 'orange', textAlign: 'center', cursor: 'pointer' }}
              onClick={() => handleNextClick(videoItem.id)}
            >
              
            </h1>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Islamd
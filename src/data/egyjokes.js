const egyjokes = [
	{
		_id: '46',
		joke: "عجوز تركض ورا صراصير ليش؟ على بالها تمرة"
	},
	{
		_id: '45',
		joke: "طبيب أطفال تزوج من طبيبة أطفال أعلنوا حفل زواجهم فى مجلة ميكي"
	},
	{
		_id: '44',
		joke: "طالب غبي حطوه بالصف لحاله جاب الثاني"
	},
	{
		_id: '43',
		joke: "ضب مواعد خويته جت ومعها خنفسانه قال من ذي؟ قالت ذي السيرلانكيه حقتي"
	},
	{
		_id: '42',
		joke: "صيدلي دلخ جاته وحدة قالت عندك شيء يبيض الوجه جابلها ذبيحة"
	},
	{
		_id: '41',
		joke: "صعيدي أتقفل على اصبعه الباب الباب ورم"
	},
	{
		_id: '40',
		joke: "صعيدى حب يعمل ليلة حمرة ولع فى الشقة النار"
	},
	{
		_id: '39',
		joke: "صرصور يركض ورى سيارة مجاري سالوه ليش قال شفط الاهل وراح"
	},
	{
		_id: '38',
		joke: "صرصور متمرد ليش؟مو لاقي نعال توقفه عند حده"
	},
	{
		_id: '37',
		joke: "صرصور طلع من خلاط كهربائى قال: يلعن أبوه اللى يدخل ملاهى مرة ثانية"
	},
	{
		_id: '36',
		joke: "صرصور طالع من السوبر ماركت زعلان ليش ؟ شاف صورة ابوه على البف باف"
	},
	{
		_id: '35',
		joke: "صرصور تزوج ناموسه بعد أسبوع طلقها ليش ؟ ذبحته بالمص"
	},
	{
		_id: '34',
		joke: "شو اسم وزير الرياضة بالاردن؟؟؟ شايط الفطابيل."
	},
	{
		_id: '33',
		joke: "شنو الشي اللي يطير ويقول ميااووو ؟ قطو شايتينه ظفر"
	},
	{
		_id: '32',
		joke: "شلة دخلت على المطعم تزغرد ليش ؟ عشان بدهم يطلبوا عرايس"
	},
	{
		_id: '31',
		joke: "سيارة إسعاف رايحه المخبز ليش؟ لأنه في خبزه انحرقت"
	},
	{
		_id: '30',
		joke: "دلوع عطوه سكين ليذبح خروف زخ السكين في يده ويقول للخروف موت"
	},
	{
		_id: '29',
		joke: "دفتر بتمشى في الشارع ليش؟ فاضي"
	},
	{
		_id: '28',
		joke: "دجاجه باضت بيضه بدون قشر ليش؟ مستعمله شامبو ضد القشره"
	},
	{
		_id: '27',
		joke: "خكري دخل بشله مخدرات يوم شاف السالفه فيها أبر قال مايجي منها تحاميل"
	},
	{
		_id: '26',
		joke: "خروف عليه خط أحمر ليش لأنه قليل الدسم ."
	},
	{
		_id: '25',
		joke: "خروف سأل أمه ماااااااااء وين بااااااء قالت : امباع"
	},
	{
		_id: '24',
		joke: "خبير إنترنت خلف ولد سماه دوت كوم"
	},
	{
		_id: '23',
		joke: "خبل شبت النار في أمه قالها: منورة يا حجة"
	},
	{
		_id: '22',
		joke: "حمار شاف حصان . قال أخ لو إني مخلص الثانوية"
	},
	{
		_id: '21',
		joke: "جرادة معها عمى الوان أكلت الأحمر واليابس"
	},
	{
		_id: '20',
		joke: "جحش أذنه مقطوعة قاعد يشوف نفسه في المرايه ويقول دايماً الحلو ناقص"
	},
	{
		_id: '19',
		joke: "بخيل مات لقوا رساله في جيبه كاتب فيها متسبح لا تغسلوني"
	},
	{
		_id: '18',
		joke: "بخيل طاحت فلوسه من فوق السطح نزل مالقاهم ليش ؟ نزل أسرع منهم"
	},
	{
		_id: '17',
		joke: "بخيل احترق بيته اتصل بالمطافى رنه و سكر."
	},
	{
		_id: '16',
		joke: "بخيل طاحت فلوسه من فوق السطح نزل مالقاهم ليش ؟ نزل أسرع منهم"
	},
	{
		_id: '15',
		joke: "بخيل احترق بيته اتصل بالمطافى رنه و سكر."
	},
	{
		_id: '14',
		joke: "البندوره لما بتعطس شو بتقول؟ كاااااااتشب"
	},
	{
		_id: '13',
		joke: "افرح اركض في الشارع قطع ثيابك صارخ انفش شوشتك جتك مني رسالة"
	},
	{
		_id: '12',
		joke: "أغبياء يبون يفجرون مبنى حطو القنابل في الدور الأول وطلعوا السطوح"
	},
	{
		_id: '11',
		joke: "أغبياء سوو مندي و تعشوا نواشف ليه ؟ ضيعوا الحفرة"
	},
	{
		_id: '10',
		joke: "أغبياء اخترعوا باص بالعرض ليه ؟ عشان يركبون كلهم قدام"
	},
	{
		_id: '9',
		joke: "عجوز نايمة على راس الدرج علشان إذا قامت تنتع"
	},
	{
		_id: '8',
		joke: "أحول سألوه ايش أمنيتك بالحياة قال: أشوف واحد ماشي لوحدة"
	},
	{
		_id: '7',
		joke: "أثنين أغبياء يتمشون لحالهم تهاوشوا من يمشي في الوسط"
	},
	{
		_id: '6',
		joke: "واحد طايحه كل سنونه ألا الأنياب قدم على وظيفه عينوووه خرامه"
	},
	{
		_id: '5',
		joke: "محشش سمع ان الشيطان شاطر راح يدرس معاه"
	},
	{
		_id: '4',
		joke: "محشش مسكوه الشرطة وقالوا له ليش عيونك حمر؟ قال شارب فيمتو وانا منسدح"
	},
	{
		_id: '3',
		joke: "محشش راح للبقالة قال لصاحبها عندك سكر؟ قال راعي البقالة:اي قاله المحشش:الله يشفيك"
	},
	{
		_id: '2',
		joke: "محشش سمع ان الشيطان شاطر راح يدرس معاهاثنين محششين مرو على تفتيش قال السواق لخويه اسكت ولاتقول شي عشان لاتفضحنا . ولما وصلوا عند التفتيش قال الضابط بطاقاتكم..قام السواق وطلع المحفظه . قال له لخويه لا والله العظيم ماتدفع اليوم على حسابي"
	},
	{
		_id: '1',
		joke: "محشش مسكوه الشرطة وقالوا له ليش عيونك حمر؟ قال شارب فيمتو وانا منسدحمحشش وقف عند نقطه تفتيش قاله بلله عبي لي بنزين بعشره"
	}
]

export default egyjokes
import React, { useState, useEffect } from 'react';

const Essentials = ({ onBack }) => {
    const [language, setLanguage] = useState('tamil'); // 'english' or 'tamil'

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-6 text-white flex flex-col sm:flex-row items-center justify-between sticky top-0 z-10 gap-4 shadow-md">
                    <h1 className="text-2xl font-bold font-serif text-center sm:text-left drop-shadow-sm">
                        {language === 'english' ? 'Essentials' : 'அடிப்படை தகவல்கள்'}
                    </h1>

                    <div className="flex items-center gap-4">
                        {/* Language Toggle */}
                        <div className="bg-white/30 p-1 rounded-full flex backdrop-blur-md border border-white/20">
                            <button
                                onClick={() => setLanguage('tamil')}
                                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${language === 'tamil'
                                    ? 'bg-white text-amber-600 shadow-md transform scale-105'
                                    : 'text-white hover:bg-white/20'
                                    }`}
                            >
                                தமிழ்
                            </button>
                            <button
                                onClick={() => setLanguage('english')}
                                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${language === 'english'
                                    ? 'bg-white text-amber-600 shadow-md transform scale-105'
                                    : 'text-white hover:bg-white/20'
                                    }`}
                            >
                                English
                            </button>
                        </div>

                        <button
                            onClick={onBack}
                            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all backdrop-blur-sm"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                <div className="p-6 sm:p-10 space-y-12 text-gray-800">

                    {/* About Us */}
                    <section className="animate-in fade-in duration-500">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b border-orange-100 pb-2">
                            {language === 'english' ? 'About Us' : 'எங்களை பற்றி'}
                        </h2>

                        {language === 'english' ? (
                            <div className="space-y-4 text-base leading-relaxed">
                                <p>
                                    <strong>SDK Calendar</strong> is a simple Temple Festival Calendar created by <strong>Sri Devarajan Kuzhumam</strong>.
                                </p>
                                <p>This calendar provides:</p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>Temple festivals</li>
                                    <li>Utsavams</li>
                                    <li>Important religious days</li>
                                    <li>Event names with photos</li>
                                </ul>
                                <p>
                                    All details are shown month-wise in an easy-to-understand format. This website and calendar are created mainly for local devotees, with a focus on simplicity, trust, and devotion.
                                </p>
                            </div>
                        ) : (
                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 space-y-4">
                                <h3 className="text-lg font-bold text-orange-700">SDK Calendar என்பது</h3>
                                <p><strong>Sri Devarajan Kuzhumam</strong> மூலம் உருவாக்கப்பட்ட ஒரு எளிய கோவில் விழா காலண்டர்.</p>
                                <p>இந்த காலண்டரில்:</p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>கோவில் திருவிழாக்கள்</li>
                                    <li>உற்சவங்கள்</li>
                                    <li>முக்கியமான மத நிகழ்ச்சி நாட்கள்</li>
                                    <li>நிகழ்ச்சி பெயர்கள் மற்றும் புகைப்படங்கள்</li>
                                </ul>
                                <p>எல்லாம் மாதம் வாரியாக, எளிதாக புரியும் தமிழில் வழங்கப்படுகிறது.</p>
                            </div>
                        )}
                    </section>

                    {/* Privacy Policy */}
                    <section className="animate-in fade-in duration-500 delay-100">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b border-orange-100 pb-2">
                            {language === 'english' ? '🔐 Privacy Policy' : '🔐 தனியுரிமைக் கொள்கை (Privacy Policy)'}
                        </h2>

                        {language === 'english' ? (
                            <>
                                <p className="text-sm text-gray-500 mb-4 italic">Last Updated: January 2026</p>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect</h3>
                                        <p>During first-time registration, we collect only the following basic details:</p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                                            <li>Name</li>
                                            <li>Email address</li>
                                            <li>Mobile number</li>
                                        </ul>
                                        <p className="mt-2 text-sm text-gray-600">We do not collect any additional personal or sensitive information beyond this.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Use of Information</h3>
                                        <p>The collected information is used only for user identification, account access, and basic communication related to the application. We do not sell, rent, or share user information with any third parties.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Information We Do Not Collect</h3>
                                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                                            <li>Location or GPS data</li>
                                            <li>Payment or financial details</li>
                                            <li>Device contacts, media, or files</li>
                                            <li>Any sensitive personal information</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="space-y-6">
                                <p>இந்த தனியுரிமைக் கொள்கை, எங்களின் Temple Calendar Website மற்றும் Mobile Application பயனர் தகவல்களை எவ்வாறு சேகரித்து பயன்படுத்துகிறது என்பதைக் விளக்குகிறது.</p>

                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">நாங்கள் சேகரிக்கும் தகவல்கள்</h4>
                                    <p>முதல் முறையாக பதிவு செய்யும் போது, கீழ்கண்ட அடிப்படை தகவல்களை மட்டுமே நாங்கள் சேகரிக்கிறோம்:</p>
                                    <ul className="list-disc pl-5 mt-2 text-gray-700">
                                        <li>பெயர்</li>
                                        <li>மின்னஞ்சல் முகவரி</li>
                                        <li>மொபைல் எண்</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">தகவல் பயன்படுத்தும் விதம்</h4>
                                    <p>சேகரிக்கப்பட்ட தகவல்கள், பயனர் அடையாளம், கணக்கு அணுகல் மற்றும் செயலி தொடர்பான அடிப்படை தகவல்களை வழங்குவதற்காக மட்டுமே பயன்படுத்தப்படும்.</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">நாங்கள் சேகரிக்காத தகவல்கள்</h4>
                                    <ul className="list-disc pl-5 mt-2 text-gray-700">
                                        <li>இடம் (Location) அல்லது GPS தகவல்</li>
                                        <li>பணம் செலுத்துதல் / நிதி தொடர்பான தகவல்கள்</li>
                                        <li>சாதன தொடர்புகள், புகைப்படங்கள் அல்லது கோப்புகள்</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Terms & Conditions */}
                    <section className="animate-in fade-in duration-500 delay-200">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b border-orange-100 pb-2">
                            {language === 'english' ? 'Terms & Conditions' : 'விதிமுறைகள் மற்றும் நிபந்தனைகள்'}
                        </h2>

                        {language === 'english' ? (
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Use of the Application</h3>
                                        <p className="text-sm text-gray-700">SDK Calendar is provided for informational purposes only. Festival dates, event names, and related details are shared based on available information. Users are advised to verify details independently if required.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">User Responsibility</h3>
                                        <p className="text-sm text-gray-700">Users should provide accurate information during registration. Any misuse of the website or application is strictly prohibited.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Content Ownership</h3>
                                        <p className="text-sm text-gray-700">All content including text, images, and other materials available on SDK Calendar belong to SDK Calendar. Reproduction without prior permission is not allowed.</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">செயலியின் பயன்பாடு</h3>
                                    <p className="text-gray-700">SDK Calendar தகவல் வழங்கும் நோக்கத்திற்காக மட்டுமே பயன்படுத்தப்படுகிறது. தேவையெனில் பயனர்கள் தாங்களே தகவல்களை சரிபார்த்து பயன்படுத்த வேண்டும்.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">பயனர் பொறுப்பு</h3>
                                    <p className="text-gray-700">பதிவு செய்யும் போது சரியான தகவல்களை வழங்க வேண்டும். தவறாக பயன்படுத்துதல் தடை செய்யப்பட்டுள்ளது.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">உள்ளடக்க உரிமை</h3>
                                    <p className="text-gray-700">SDK Calendar-ல் உள்ள உரை, படங்கள் அனைத்தும் SDK Calendar-க்கு சொந்தமானவை.</p>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Support */}
                    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 animate-in fade-in duration-500 delay-300">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                            {language === 'english' ? (
                                <><span>📞</span> Support & Contact</>
                            ) : (
                                <><span>📞</span> ஆதரவு மற்றும் தொடர்பு</>
                            )}
                        </h2>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">
                                    {language === 'english' ? 'SDK Calendar – Support' : 'SDK Calendar – தொடர்புக்கு'}
                                </h3>
                                <p className="text-gray-700 mb-2">
                                    {language === 'english'
                                        ? 'For any queries, feedback, or support related to SDK Calendar, please feel free to contact us.'
                                        : 'SDK Calendar தொடர்பான கேள்விகள், கருத்துகள் அல்லது உதவிகளுக்கு எங்களை தொடர்பு கொள்ளலாம்.'}
                                </p>
                            </div>

                            <a href="mailto:sdkcalendar.app@gmail.com" className="bg-white border text-blue-600 px-6 py-3 rounded-xl font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-3 w-fit whitespace-nowrap">
                                <span className="text-xl">📧</span>
                                <span className="hidden sm:inline">sdkcalendar.app@gmail.com</span>
                                <span className="sm:hidden">Email Us</span>
                            </a>
                        </div>
                    </section>

                </div>

                {/* Footer close button */}
                <div className="bg-gray-50 p-4 flex justify-center sticky bottom-0 border-t z-10">
                    <button
                        onClick={onBack}
                        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                        {language === 'english' ? 'Close & Back to Calendar' : 'காலண்டருக்குத் திரும்பு'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Essentials;

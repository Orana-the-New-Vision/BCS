import React from "react";
import Saul from '../components/eys.png'
import B from '../components/bullet.png'
import '../App.css'
import Footer from "./footer";
function About() {
    return (
        <div >
                <h1 className="Headings">About</h1>
                <div className="leftcolumn">
                    <img src={Saul}/>
                    <p className="card">
                        <h3>BIO</h3>
                        James Morgan "Jimmy" McGill, better known by 
                        his professional alias and business moniker Saul Goodman, is an Irish-American criminal defense lawyer, scam artist, and convicted criminal who is serving an 86-year sentence at ADX Montrose. Originally from Cicero, Illinois during his career as a scam artist, Jimmy moved to Albuquerque, New Mexico where he worked as a lawyer, and later resided as a fugitive in Omaha, Nebraska before being caught and apprehended in a federal prison at Montrose, Colorado. During his law career, Jimmy embraced his tendencies as a former scam artist and, after becoming a dedicated and effective criminal lawyer, he began to represent criminals while he himself became increasingly involved in the city's criminal underworld, slowly losing his morality along the way. Despite his flamboyant appearance and mannerisms, Saul was a highly competent lawyer who was able to solve problems and find loopholes in order to protect his clients. His business name, "Saul Goodman," is a play on the phrase "it's all good, man."
                        Dressing in flashy suits, Jimmy is the younger brother of fellow lawyer Chuck McGill and the ex-husband of former attorney Kim Wexler, the latter of whom helped inspire Jimmy to pursue his own law career alongside Chuck, and had dated for several years before their six-month marriage. Jimmy began his law career as an earnest lawyer, starting out practicing public defense and elder law before becoming a criminal defense lawyer. Before this, Jimmy was a low-level reprobate in his home town of Cicero with no serious ambitions or direction in life, wasting away his days with debauchery, bar tricks and small-time scams with his buddy Marco. Jimmy hit rock bottom when a particularly sordid incident lead to his arrest, but a dismayed Chuck was able to get him off the hook for all the charges. Faced with serious consequences for once, this was to be a major turning point for Jimmy, after which he decided to clean up his act and move to Albuquerque to take up honest work at his brother's firm. He originally worked as a mailroom clerk at Hamlin, Hamlin & McGill (HHM) alongside Kim. Meanwhile, unbeknownst to the partners, Jimmy studied via correspondence courses, gained a law degree from a diploma mill and eventually qualified as a lawyer. Jimmy then immediately applied for but was denied a position as an Associate attorney at the firm by Chuck and his partner Howard Hamlin. As a result, Jimmy quit HHM to set out on his own as a solo practitioner, working from a tiny makeshift office in the back room of a nail salon, After toiling for a long time on thankless public defender work, dead end cases and will-writing, Jimmy got his first big break with a class-action lawsuit against a retirement home chain. Jimmy worked together to build the increasingly complex Sandpiper case with Chuck, who persuaded him to refer the case out to HHM. For a second time Jimmy pushed for the chance to work for HHM and was again blocked by Chuck. Incensed, Jimmy resolved to burn the case to the ground rather than give it to HHM, and considered quitting the law altogether and returning to his old ways. However, after the sudden death of Marco, Jimmy was brought back to the fold by Kim, who persuaded Howard to recommend Jimmy for a job as an associate attorney at Davis & Main, HHM's co-counsel on the Sandpiper case, which Jimmy reluctantly accepts. Jimmy stubbornly rebelled against the corporate culture at the firm, clashing with the partners and was eventually fired by Clifford Main. Jimmy then established his own law firms; first with Kim at Wexler McGill and later establishing Saul Goodman & Associates. Jimmy was devastated by Chuck's revelation that he greatly resented his brother and believed him to be completely unfit to be a lawyer, which led to Chuck preventing Jimmy from being hired by HHM, later proceeding to create a majority of the obstacles Jimmy faces early on in his career, beginning Jimmy's rivalry with Howard, and causing Chuck to become unintentionally largely responsible for turning Jimmy into the criminally-inclined lawyer that he later becomes.
                    </p>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <img className="bullets" vert src={B}/>
                        As both himself and in his Saul Goodman persona, 
                        Jimmy McGill is a highly intelligent, cunning, 
                        manipulative person who is a dedicated criminal 
                        lawyer and also a complete conman at heart. 
                        He is overall a person who will resort to 
                        whatever measures to achieve his own goals or 
                        protect his client's interests.
                    </div>
                    <div className="card">
                        <img className="bullets" vert src={B}/>
                            Con artist (former)
                            Mailroom clerk at Hamlin, Hamlin & McGill (former)
                            Public Defense Attorney (former)
                            Independent elder law attorney (former)
                            Associate attorney, Davis & Main (former)
                            Elder law attorney, Wexler McGill (former)
                            Cell phone salesman, CC Mobile (former)
                            Criminal defense attorney, Saul Goodman & Associates (former)
                            Manager, Ice Station Zebra Associates (former)
                            Cinnabon manager (former)
                    </div>
                    <div className="card">
                        <img className="bullets" vert src={B}/>
                        <h4>Contacts</h4>
                        <form>E-mail: bettercallsaul@gmail.com 
                        CALL (505) 503-4455</form>

                    </div>
                </div>
            <Footer/>
        </div>
        
    );
}

export default About;
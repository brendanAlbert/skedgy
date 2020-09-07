import React, { Fragment, useState } from "react";
import "./createSkedg.css";

const CreateSkedg = () => {
	// let periods = [0, 1, 2, 3, 4, 5, 6];

	const [choices, setChoices] = useState([]);

	const handleAdd = () => {
		if (choices.length === 0) {
			setChoices([...choices, "1st"]);
		} else if (choices.length === 1) {
			setChoices([...choices, "2nd"]);
		} else if (choices.length === 2) {
			setChoices([...choices, "3rd"]);
		} else if (choices.length === 3) {
			setChoices([...choices, "4th"]);
		}
	};

	return (
		<Fragment>
			<div className="skedg-container">
				{/* <h2>Here are my 1st, 2nd, 3rd and 4th choice schedules</h2> */}
				<h4>Create my grade 9 schedule</h4>
				<div className="schedules-container">
					<div className="course-section">
						<div className="section-title sunflower">Health</div>
						<div className="section-options">
							<div className="section_option">
								<input
									id="summer-health"
									type="radio"
									name="health"
									value="summer health"
								/>
								<label htmlFor="summer-health">
									Summer Health
								</label>
							</div>
							<div className="section_option">
								<input
									type="radio"
									id="online-health"
									name="health"
								/>
								<label htmlFor="online-health">
									Online Health during school year
								</label>
							</div>
						</div>
					</div>
					<div className="course-section">
						<div className="section-title energos">
							Physical Education
						</div>
						<div className="section-options">
							<div className="section_option">
								<input
									id="pe"
									type="radio"
									name="phys-ed"
									value="physical education"
								/>
								<label htmlFor="pe">Physical Education</label>
							</div>
							<div className="section_option">
								<input
									type="radio"
									name="phys-ed"
									id="colorguard"
								/>
								<label htmlFor="colorguard">
									Colorguard/PE
								</label>
							</div>
							<div className="section_option">
								<input
									type="radio"
									name="phys-ed"
									id="marching-band"
								/>
								<label htmlFor="marching-band">
									Marching Band/PE *fall only
								</label>
							</div>
							<div className="section_option">
								<input
									type="radio"
									name="phys-ed"
									id="professional-dance-i"
								/>
								<label htmlFor="professional-dance-i">
									Professional Dance I
								</label>
							</div>
							<div className="section_option">
								<input
									type="radio"
									name="phys-ed"
									id="athletics"
								/>
								<label htmlFor="athletics">Athletics</label>
							</div>
						</div>
					</div>
					<div className="course-section">
						<div className="section-title bara-red">English</div>
						<div className="section-options">
							<div className="section_option">
								<input
									id="eng9"
									type="radio"
									name="english"
									value="english 9"
								/>
								<label htmlFor="eng9">English 9</label>
							</div>
							<div className="section_option">
								<input
									type="radio"
									id="eng9honors"
									name="english"
									value="english 9 honors"
								/>
								<label htmlFor="eng9honors">
									English 9 Honors
								</label>
							</div>
							<div className="section_option">
								<input
									type="radio"
									id="english9-performing-arts"
									name="english"
									value="english 9 performing arts"
								/>
								<label htmlFor="english9-performing-arts">
									UCCI English 9: Performing Arts
								</label>
							</div>
						</div>
					</div>
					<div className="course-section">
						<div className="section-title blue-martina">Math</div>
						<div className="section-options">
							<div className="section_option">
								<input
									id="math1"
									type="radio"
									name="math"
									value="math1"
								/>
								<label htmlFor="math1">Math I</label>
							</div>
							<div className="section_option">
								<input
									id="math1honors"
									type="radio"
									name="math"
									value="math1honors"
								/>
								<label htmlFor="math1honors">
									Math I Honors*
								</label>
							</div>
							<div className="section_option">
								<input
									id="math2"
									type="radio"
									name="math"
									value="math2"
								/>
								<label htmlFor="math2">Math II*</label>
							</div>
							<div className="section_option">
								<input
									id="math2honors"
									type="radio"
									name="math"
									value="math2honors"
								/>
								<label htmlFor="math2honors">
									Math II Honors*
								</label>
							</div>
							<div className="section_option">
								<input
									id="math3honors"
									type="radio"
									name="math"
									value="math3honors"
								/>
								<label htmlFor="math3honors">
									Math III Honors*
								</label>
							</div>
							<div className="section_option">
								<label htmlFor="">
									<p>
										* requires teacher approval for 9th
										graders
									</p>
								</label>
							</div>
						</div>
					</div>
					<div className="course-section">
						<div className="section-title pixelated-grass">
							Science
						</div>
						<div className="section-options">
							<div className="section_option">
								<input
									id="earth-science"
									type="radio"
									name="science"
									value="earth-science"
								/>
								<label htmlFor="earth-science">
									Earth Science
								</label>
							</div>
							<div className="section_option">
								<input
									id="biology"
									type="radio"
									name="science"
									value="biology"
								/>
								<label htmlFor="biology">Biology*</label>
							</div>
							<div className="section_option">
								<input
									id="biologyhonors"
									type="radio"
									name="science"
									value="biologyhonors"
								/>
								<label htmlFor="biologyhonors">
									Biology Honors*
								</label>
							</div>
							<div className="section_option">
								<label htmlFor="biologyhonors">
									* requires teacher approval for 9th graders
								</label>
							</div>
						</div>
					</div>
					<div className="course-section">
						<div className="section-title marine-blue">
							College and Career Readiness
						</div>
						<div className="section-options">
							<div className="section_option">
								<input
									id="avid9"
									type="radio"
									name="cacr"
									value="avid9"
								/>
								<label htmlFor="avid9">AVID 9</label>
							</div>
							<div className="section_option">
								<input
									id="ap_human_geography"
									type="radio"
									name="cacr"
									value="ap_human_geography"
								/>
								<label htmlFor="ap_human_geography">
									AP Human Geography
								</label>
							</div>
							<div className="section_option">
								<input
									id="career_focus_arts_media"
									type="radio"
									name="cacr"
									value="career_focus_arts_media"
								/>
								<label htmlFor="career_focus_arts_media">
									Career Focus Arts Media
								</label>
							</div>
							<div className="section_option">
								<input
									id="foundations_tech_engineering"
									type="radio"
									name="cacr"
									value="foundations_tech_engineering"
								/>
								<label htmlFor="foundations_tech_engineering">
									Foundations of Tech + Engineering
								</label>
							</div>
							<div className="section_option">
								<input
									id="career_focus_aviation"
									type="radio"
									name="cacr"
									value="career_focus_aviation"
								/>
								<label htmlFor="career_focus_aviation">
									Career Focus Aviation
								</label>
							</div>
							<div className="section_option">
								<input
									id="career_focus_medical"
									type="radio"
									name="cacr"
									value="career_focus_medical"
								/>
								<label htmlFor="career_focus_medical">
									Career Focus Medical
								</label>
							</div>
							<div className="section_option">
								<input
									id="career_focus_education"
									type="radio"
									name="cacr"
									value="career_focus_education"
								/>
								<label htmlFor="career_focus_education">
									Career Focus Education
								</label>
							</div>
							<div className="section_option">
								<input
									id="law_order"
									type="radio"
									name="cacr"
									value="law_order"
								/>
								<label htmlFor="law_order">Law and Order</label>
							</div>
							<div className="section_option">
								<input
									id="criminal_justice"
									type="radio"
									name="cacr"
									value="criminal_justice"
								/>
								<label htmlFor="criminal_justice">
									Criminal Justice
								</label>
							</div>
							<div className="section_option">
								<input
									id="professional_dance"
									type="radio"
									name="cacr"
									value="professional_dance"
								/>
								<label htmlFor="professional_dance">
									Professional Dance
								</label>
							</div>
						</div>
					</div>
					<div className="course-section">
						<div className="section-title red-pigment">
							Foreign Language or Elective
						</div>
						<div className="section-options">
							<div className="section_option">
								<input
									id="spanish1"
									type="radio"
									name="language-or-elective"
									value="spanish1"
								/>
								<label htmlFor="spanish1">Spanish I</label>
							</div>
							<div className="section_option">
								<input
									id="chinese1"
									type="radio"
									name="language-or-elective"
									value="chinese1"
								/>
								<label htmlFor="chinese1">Chinese I</label>
							</div>
							<div className="section_option">
								<input
									id="chinese1-online"
									type="radio"
									name="language-or-elective"
									value="chinese1-online"
								/>
								<label htmlFor="chinese1-online">
									Chinese I Online
								</label>
							</div>
							<div className="section_option">
								<input
									id="french1"
									type="radio"
									name="language-or-elective"
									value="french1"
								/>
								<label htmlFor="french1">French I</label>
							</div>
							<div className="section_option">
								<input
									id="spanish2"
									type="radio"
									name="language-or-elective"
									value="spanish2"
								/>
								<label htmlFor="spanish2">Spanish II</label>
							</div>
							<div className="section_option">
								<input
									id="ap-human-geography"
									type="radio"
									name="language-or-elective"
									value="ap-human-geography"
								/>
								<label htmlFor="ap-human-geography">
									AP Human Geography
								</label>
							</div>
							<div className="section_option">
								<input
									id="journalism"
									type="radio"
									name="language-or-elective"
									value="journalism"
								/>
								<label htmlFor="journalism">Journalism</label>
							</div>
							<div className="section_option">
								<input
									id="yearbook"
									type="radio"
									name="language-or-elective"
									value="yearbook"
								/>
								<label htmlFor="yearbook">Yearbook</label>
							</div>
							<div className="section_option">
								<input
									id="academic-support"
									type="radio"
									name="language-or-elective"
									value="academic-support"
								/>
								<label htmlFor="academic-support">
									Academic Support
								</label>
							</div>
							<div className="section_option">
								<input
									id="leadership-asb"
									type="radio"
									name="language-or-elective"
									value="leadership-asb"
								/>
								<label htmlFor="leadership-asb">
									Leadership (ASB) *elected
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default CreateSkedg;

const keys = require("../../config/keys");
module.exports = (survey) => {
  return `
        <html>
            <body>
               <div style="text-align: center;">
                    <h3>We would like to have your inputs</h3>
                    <p>please answer the following questions:</p>
                    <p>${survey.body}</p>
                    <div>
                        <div>
                            <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                        </div>
                        <div>
                            <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                        </div>
                    </div>
                </div>
            </body>

        </html>
  `;
};

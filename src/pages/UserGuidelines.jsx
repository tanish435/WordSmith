import React from "react";

function UserGuidelines() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 md:text-4xl">User Guidelines</h1>
            <p className="text-gray-500 mb-8 text-lg dark:text-[#b3b3b3]">
              Welcome to WordSmith, our vibrant community of writers, readers, and enthusiasts. To ensure a positive and
              enriching experience for everyone, we've outlined the following guidelines for our users. Please take a moment
              to review them.
            </p>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-2">Appropriate Content</h2>
                <p className="text-gray-500 dark:text-[#b3b3b3] mb-4">
                  We strive to maintain a family-friendly environment on WordSmith. Please refrain from posting any content
                  that is inappropriate, offensive, or illegal. This includes, but is not limited to, explicit language,
                  hate speech, or content that promotes violence, discrimination, or illegal activities.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Commenting Etiquette</h2>
                <p className="text-gray-500 dark:text-[#b3b3b3] mb-4">
                  We encourage thoughtful and constructive comments that add value to the discussion. Avoid personal
                  attacks, trolling, or spamming. Respect the opinions of others, even if you disagree. If you encounter any
                  inappropriate comments, please report them to our moderation team.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Reporting Issues</h2>
                <p className="text-gray-500 dark:text-[#b3b3b3] mb-4">
                  If you encounter any technical issues, bugs, or have feedback about the platform, please don't hesitate to
                  reach out to our support team. You can submit a report through the "Report an Issue" form on the website,
                  or by emailing us at support@wordsmith.com.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Intellectual Property</h2>
                <p className="text-gray-500 dark:text-[#b3b3b3] mb-4">
                  All content on WordSmith, including articles, images, and multimedia, is the intellectual property of
                  their respective owners. Unauthorized use, reproduction, or distribution of this content is strictly
                  prohibited. Please respect the rights of content creators and only use materials in accordance with our
                  terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
}

export default UserGuidelines;
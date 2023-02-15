import React from 'react';

import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <section className="py-20 lg:py-28 lg:m-20">
      <div className="container mx-auto flex flex-wrap lg:justify-between">

        {/* Left section - Information */}

        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          <span className="block text-gray-900 mb-2 text-base font-semibold">#tools</span>
          <h2 className="text-indigo-600 mb-4 text-4xl font-bold uppercase sm:text-5xl lg:text-4xl">CPM CALCULATOR</h2>
          <p className="text-gray-600 mb-20 text-base leading-relaxed">
            Calculate the effectiveness of your media advertising efforts with ease. 
            Our calculator works for all digital ad campaign types, including Facebook Ads and Google Ads.
          </p>

          {/* FAQ Section */}

          <article className="mb-8">
            <h4 className="text-gray-900 mb-1 text-xl font-medium">What is CPM?</h4>
            <p className="text-gray-600 text-base">
              CPM stands for Cost Per Mile. Also known as Cost Per Thousand Impressions which is a metric used to measure the cost effectiveness of online advertising campaigns. 
              It represents the cost of displaying an advertisement 1,000 times to a specific audience. CPM is often used to plan and buy display advertising, 
              where the focus is on reaching a large number of people, rather than a specific target audience.
            </p>
          </article>

          <article className="mb-8">
            <h4 className="text-gray-900 mb-1 text-xl font-medium">What is the formula to calculate CPM?</h4>
            <p className="text-gray-600 text-base mb-4">To calculate CPM, you need to divide the cost of your advertising campaign by the number of impressions received, then multiplay by 1,000. The formula is:</p>
            <p className="text-gray-600 text-base mb-4">For example, if you spent $500 on a campaign and received 100,000 impressions, the CPM would be:</p>
            <p className="text-gray-600 text-base mb-4">CPM = ($500 / 100,000) * 1,000 = $5</p>
            <p className="text-gray-600 text-base">This means it cost $5 to deliver your ad 1,000 times to your target audience.</p>
          </article>

          <article className="mb-8">
            <h4 className="text-gray-900 mb-1 text-xl font-medium">When is it necessary to utilize a CPM calculator?</h4>
            <p className="text-gray-600 text-base">A CPM calculator is necessary when you want to determine the cost-effectiveness of your online advertising campaign based on the number of impressions it received. 
              It is particularly useful for display advertising campaigns, where the focus is on reaching a large audience, rather than a specific target audience.
            </p>
          </article>
        </div>

        {/* Right Section - Calculator */}

        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <Calculator />
        </div>
      </div>
    </section>
  );
}

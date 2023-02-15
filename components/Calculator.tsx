'use client';

import { InitialFormState } from "@/types";
import { formatCurrency, toNumber } from "@/utils";
import { ChangeEvent, useState } from "react";
import Button from "./Button";
import Textfield from "./Textfield";

export default function Calculator() {
  const [form, setForm] = useState(InitialFormState);

  const { campaignCost, adImpressions, cpmRate } = form;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: toNumber(value),
    });
  };

  const onCalculate = () => {
    if (!campaignCost || !adImpressions) return;

    setForm({
      ...form,
      cpmRate: (1000 * campaignCost) / adImpressions,
    });
  };

  const onReset = () => {
    setForm(InitialFormState);
  }

  return (
    <div className="rounded-md p-8 sm:p-6 shadow-lg">
      <div className="mb-6">
        <Textfield 
          name="campaignCost"
          placeholder="0"
          value={campaignCost}
          onChange={onChange}
          onBlur={onBlur}
          label="Total campaign cost"
          legend="The total cost of your media advertising campaign can be located in the ad management platform you use, such as your Facebook Ads account."
        />
      </div>

      <div className="mb-6">
        <Textfield 
          name="adImpressions"
          placeholder="0"
          value={adImpressions}
          onChange={onChange}
          onBlur={onBlur}
          label="Ad impressions"
          legend="The ad management platform you use, such as Facebook Ads, will display the number of views for your advertisement."
        />
      </div>

      <div className="space-y-2">
        <Button className="bg-indigo-600" onClick={onCalculate}>Calculate CPM</Button>

        {cpmRate && (
          <Button className="bg-indigo-600" onClick={onReset}>Reset</Button>
        )}
      </div>

      {cpmRate && (
        <div className="mt-8 p-4 rounded-md md:p-8 bg-gray-800">
          <h2 className="mb-3 text-3xl font-extrabold text-white">
            CPM Rate: <span className="text-yellow-500">{formatCurrency(cpmRate)}</span>
          </h2>
          <p className="text-gray-400">
            CPM rate is the cost an advertiser pays for one thousand impressions (views) of an advertisement.
          </p>
        </div>
      )}


    </div>
  );
}

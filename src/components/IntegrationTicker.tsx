"use client";

import React from 'react';
import Image from 'next/image';

interface Integration {
  name: string;
  logo: string;
}

const IntegrationTicker = () => {
  const integrations: Integration[] = [
    { name: 'Bookingkit', logo: '/brand-logos/bookingkit.jpeg' },
    { name: 'Zoom', logo: '/brand-logos/zoom.png' },
    { name: 'Outlook', logo: '/brand-logos/Microsoft Outlook/Microsoft Outlook_idba6uBLxy_1.svg' },
    { name: 'Notion', logo: '/brand-logos/Notion/Notion_Symbol_0.svg' },
    { name: 'Slack', logo: '/brand-logos/Slack/Icon.jpeg' },
    { name: 'Twilio', logo: '/brand-logos/Twilio/Twilio_idseuPD28S_0.svg' },
    { name: 'YouTube', logo: '/brand-logos/YouTube/YouTube_Symbol_0.svg' },
    { name: 'Gmail', logo: '/brand-logos/gmail.svg' },
    { name: 'Google Docs', logo: '/brand-logos/Google/Google_Google_Docs_14.svg' },
    { name: 'Google Calendar', logo: '/brand-logos/Google/Google_google_calendar_10.svg' },
    { name: 'Google Drive', logo: '/brand-logos/Google/Google_Google_Drive_12.svg' },
    { name: 'Google Sheets', logo: '/brand-logos/Google/Google_Google_Sheets_16.svg' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-muted/30 p-6">
      {/* Integration Grid */}
      <div className="grid grid-cols-4 gap-3">
        {integrations.slice(0, 12).map((integration, i) => (
          <div
            key={i}
            className={`${integration.name === 'Slack' ? 'w-16 h-16' : 'w-14 h-14'} bg-background border border-border rounded-lg flex items-center justify-center ${integration.name === 'Slack' ? 'p-3' : 'p-2.5'} shadow-sm hover:shadow-md hover:border-primary transition-all group`}
          >
            <div className="w-full h-full relative">
              <Image
                src={integration.logo}
                alt={integration.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationTicker;

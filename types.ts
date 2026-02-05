
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

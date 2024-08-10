import React from 'react';

export default function Card({ children }: { children: ReactNode }) {
    return (
      <div className="support__point">
        <img className="sp__image" src={null} />
        <div className="sp__text">
          {children}
        </div>
      </div>
    );
}
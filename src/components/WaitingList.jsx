import React, { useState, useEffect } from 'react';

const donationRequests = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    request: 'Funding for educational materials',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2023-05-28T13:23:00Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    request: 'Support for medical expenses',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2023-05-28T14:00:00Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    request: 'Community development project funding',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2023-05-28T15:30:00Z',
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    request: 'Assistance with housing expenses',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2023-05-28T16:00:00Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    request: 'Funding for startup business',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2023-05-28T17:00:00Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    request: 'Aid for natural disaster relief',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2023-05-28T18:00:00Z',
  },
];

function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

export default function Dashboard() {
  const [requests, setRequests] = useState(donationRequests);

  useEffect(() => {
    const interval = setInterval(() => {
      setRequests(requests.map(request => ({
        ...request,
        timeRequested: timeSince(request.timeRequestedDateTime)
      })));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [requests]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div> */}
        <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <ul role="list" className="divide-y divide-gray-100">
                {requests.map((request) => (
                  <li key={request.email} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={request.imageUrl} alt="" />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{request.name}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{request.email}</p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">{request.request}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Requested <time dateTime={request.timeRequestedDateTime}>{request.timeRequested}</time>
                        </p>
                        {/* <div className="mt-1 flex items-center gap-x-1.5">
                          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <p className="text-xs leading-5 text-gray-500">Online</p>
                        </div> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

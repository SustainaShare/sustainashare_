import { useState, useEffect } from 'react';

const donationRequests = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    request: 'Funding for educational materials',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2024-05-28T13:23:00Z',
    status: 'pending',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    request: 'Support for medical expenses',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2024-05-28T14:00:00Z',
    status: 'pending',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    request: 'Community development project funding',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2024-05-28T15:30:00Z',
    status: 'pending',
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    request: 'Assistance with housing expenses',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2024-05-28T16:00:00Z',
    status: 'pending',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    request: 'Funding for startup business',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2024-05-28T17:00:00Z',
    status: 'pending',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    request: 'Aid for natural disaster relief',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    timeRequestedDateTime: '2024-05-28T18:00:00Z',
    status: 'pending',
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

  const acceptRequest = (email) => {
    setRequests(requests.map(request => 
      request.email === email ? { ...request, status: 'accepted' } : request
    ));
  };

  const rejectRequest = (email) => {
    setRequests(requests.map(request => 
      request.email === email ? { ...request, status: 'rejected' } : request
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRequests(requests.map(request => ({
        ...request,
        timeRequested: timeSince(request.timeRequestedDateTime)
      })));
    }, 5000); // Update every 5 Secs

    return () => clearInterval(interval);
  }, [requests]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h1 className="text-3xl font-bold mb-8">Donation Requests</h1> {/* Heading added here */}
        <div className="relative px-2 py-1 bg-white shadow-lg rounded-3xl sm:p-10">
            <div className="max-w-2xl mx-auto">
                <div className="divide-y divide-gray-200">
                <ul role="list" className="divide-y divide-gray-700">
                    {requests.map((request) => (
                    <li key={request.email} className="flex flex-col sm:flex-row justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={request.imageUrl} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{request.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{request.email}</p>
                            <p className="mt-1 text-xs leading-5 text-black"><em>{request.request}</em></p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                            Requested <time dateTime={request.timeRequestedDateTime}>{request.timeRequested}</time>
                            </p>
                        </div>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:flex sm:flex-col sm:items-end">
                        {request.status === 'pending' && (
                            <div className="flex gap-x-2 mt-2 sm:mt-0">
                            <button 
                                onClick={() => acceptRequest(request.email)} 
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
                            >
                                Accept
                            </button>
                            <button 
                                onClick={() => rejectRequest(request.email)} 
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                            >
                                Reject
                            </button>
                            </div>
                        )}
                        {request.status === 'accepted' && (
                            <p className="mt-4 text-sm font-semibold text-green-500">Accepted</p>
                        )}
                        {request.status === 'rejected' && (
                            <p className="mt-4 text-sm font-semibold text-red-500">Rejected</p>
                        )}
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

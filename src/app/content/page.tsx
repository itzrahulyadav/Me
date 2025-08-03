import type { NextPage } from 'next';
import { Geist } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const geist = Geist({ subsets: ['latin'] });

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const MessageCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
);


const posts = [
  {
    id: 1,
    author: 'Rahul Yadav',
    handle: '@rahulyadav',
    avatar: '/profile-pic.png', // Make sure you have a profile picture at this path
    content: `
      <h3 class="text-xl font-bold mb-2">Why I Chose Go for My Latest Backend Project</h3>
      <p>Go, also known as Golang, has been my go-to language for backend services lately. Its simplicity, performance, and powerful concurrency model make it a perfect choice for building scalable and maintainable systems. In this post, I'll break down the key reasons why Go won over other languages for my latest project.</p>
    `,
    timestamp: '2h ago',
    likes: 128,
    comments: 12,
  },
  {
    id: 2,
    author: 'Rahul Yadav',
    handle: '@rahulyadav',
    avatar: '/profile-pic.png',
    content: `
      <h3 class="text-xl font-bold mb-2">Mastering Kubernetes Networking: A Practical Guide</h3>
      <p>Kubernetes networking can be intimidating, but it's essential for running production-grade applications. This guide will walk you through the fundamentals, from Services and Ingress to Network Policies, with practical examples to help you get started.</p>
      <img src="/k8s-networking.png" alt="Kubernetes Networking Diagram" class="mt-4 rounded-lg border border-gray-200" />
    `,
    timestamp: '1d ago',
    likes: 256,
    comments: 28,
  },
  {
    id: 3,
    author: 'Rahul Yadav',
    handle: '@rahulyadav',
    avatar: '/profile-pic.png',
    content: `
      <h3 class="text-xl font-bold mb-2">5 AWS Services You Should Be Using in 2025</h3>
      <p>AWS is constantly evolving, and it can be hard to keep up. Here are five services that have become indispensable in my workflow for building secure, scalable, and cost-effective cloud applications. From AWS Lambda to Amazon Bedrock, these tools are game-changers.</p>
    `,
    timestamp: '3d ago',
    likes: 412,
    comments: 45,
  }
];

const ContentPage: NextPage = () => {
  return (
    <div className={`${geist.className} bg-white min-h-screen`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-8">
        
        {/* --- LEFT SIDEBAR --- */}
        <aside className="col-span-1 md:sticky top-8 h-screen">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-black flex items-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#090909"/><path d="M11 23V9H18.5C20.9853 9 23 11.0147 23 13.5C23 15.9853 20.9853 18 18.5 18H14.5L11 23Z" fill="white"/><path d="M14.5 18L20 23H15.5L11 18H14.5Z" fill="white"/></svg>
              <span>News Feed</span>
            </Link>
            <div className="rounded-xl overflow-hidden border border-gray-200 mt-4">
              <video
                src="https://eks-rxhxl.s3.ap-south-1.amazonaws.com/What_Is_a_Kubernetes_Operator_.mp4" 
                controls={true}
                loop
                playsInline
                width="100%"
                className="w-full h-auto"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT FEED --- */}
        <main className="col-span-1 md:col-span-2">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-black flex items-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#090909"/><path d="M11 23V9H18.5C20.9853 9 23 11.0147 23 13.5C23 15.9853 20.9853 18 18.5 18H14.5L11 23Z" fill="white"/><path d="M14.5 18L20 23H15.5L11 18H14.5Z" fill="white"/></svg>
              <span>News Feed</span>
            </Link>
          </div>
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start space-x-4">
                  <Image src={post.avatar} alt="Author Avatar" width={48} height={48} className="rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-bold text-black">{post.author}</p>
                      <p className="text-gray-500">{post.handle}</p>
                      <p className="text-gray-500">&middot;</p>
                      <p className="text-gray-500">{post.timestamp}</p>
                    </div>
                    <div className="mt-2 text-gray-800 prose" dangerouslySetInnerHTML={{ __html: post.content }} />
                    <div className="mt-4 flex items-center justify-between text-gray-500">
                      <button className="flex items-center space-x-2 hover:text-pink-500">
                        <HeartIcon />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-blue-500">
                        <MessageCircleIcon />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-green-500">
                        <ShareIcon />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* --- RIGHT SIDEBAR --- */}
        <aside className="col-span-1 md:sticky top-8 h-screen">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-lg text-black mb-4">Quick access</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Cloud Engineering &middot; Trending</p>
                <a href = "https://github.com/itzrahulyadav/DevOps-Notes/tree/main/Terraform" target='_blank'>
                <p className="font-bold text-black">#Terraform</p>
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">DevOps &middot; Trending</p>
               <a href = "https://github.com/itzrahulyadav/DevOps-Notes/tree/main/Go" target="_blank">
                <p className="font-bold text-black">#Golang</p>
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">Programming &middot; Trending</p>
                <a href = "https://github.com/itzrahulyadav/DevOps-Notes/tree/main/AWS" target='_blank'>
                <p className="font-bold text-black">#AWS</p>
                </a>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ContentPage;

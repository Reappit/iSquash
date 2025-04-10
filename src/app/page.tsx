import { CalendarDays, ChevronRight, Star, Trophy } from 'lucide-react';

import Header from '@/components/custom/header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="center flex min-h-screen flex-col bg-white">
      <Header />
      <section className="relative flex justify-center py-12 md:py-16">
        {/* Background with squash court pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-green-50/50"></div>
          {/* Horizontal court lines */}
          <div className="absolute left-0 right-0 top-1/4 h-px bg-green-200/30"></div>
          <div className="absolute left-0 right-0 top-2/4 h-px bg-green-200/30"></div>
          <div className="absolute left-0 right-0 top-3/4 h-px bg-green-200/30"></div>
          {/* Vertical court lines */}
          <div className="absolute bottom-0 left-1/4 top-0 w-px bg-green-200/30"></div>
          <div className="absolute bottom-0 left-2/4 top-0 w-px bg-green-200/30"></div>
          <div className="absolute bottom-0 left-3/4 top-0 w-px bg-green-200/30"></div>
          {/* Service box */}
          <div className="absolute bottom-1/3 left-1/3 right-1/3 top-1/3 rounded-lg border border-green-200/30"></div>
        </div>

        <div className="relative z-10">
          <div className="grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-12">
            {/* Left Content - Main Message */}
            <div className="space-y-6 md:col-span-6">
              <div className="mb-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-green-800">
                #1 Squash Tournament Platform
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
                Elevate Your <span className="text-primary">Squash Game</span>
              </h1>
              <p className="max-w-xl text-xl text-gray-600">
                The ultimate platform for managing tournaments, tracking player
                ratings, and analyzing your game with AI-powered insights.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-yellow-400 font-medium text-green-800 hover:bg-yellow-500"
                >
                  Get Started Free
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary rounded-full hover:bg-green-50"
                >
                  Explore Tournaments
                </Button>
              </div>

              {/* Testimonial */}
              <div className="mt-8 rounded-xl border border-green-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Avatar className="h-10 w-10 border-2 border-yellow-100">
                      <AvatarFallback className="bg-yellow-400 text-green-800">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm italic text-gray-600">
                      iSquash transformed how we run tournaments at our club.
                      The player ratings and match analysis features are
                      game-changers!
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-800">
                      John Doe, Tournament Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Tournament Rankings Preview */}
            <div className="md:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-lg">
                <div className="from-primary bg-gradient-to-r to-green-700 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-yellow-400 p-1">
                        <Trophy className="h-5 w-5 text-green-800" />
                      </div>
                      <h3 className="font-bold">Global Tournament Rankings</h3>
                    </div>
                    <Badge className="bg-yellow-400 text-green-800 hover:bg-yellow-500">
                      Live
                    </Badge>
                  </div>
                </div>

                {/* Top Players Preview */}
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-medium text-gray-500">
                      TOP RANKED PLAYERS
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          rank: 1,
                          name: 'Alex Johnson',
                          country: 'USA',
                          rating: 1850,
                          change: 25,
                        },
                        {
                          rank: 2,
                          name: 'Sarah Williams',
                          country: 'UK',
                          rating: 1820,
                          change: 15,
                        },
                        {
                          rank: 3,
                          name: 'Michael Chen',
                          country: 'China',
                          rating: 1795,
                          change: -10,
                        },
                      ].map(player => (
                        <div
                          key={player.rank}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                player.rank === 1
                                  ? 'bg-yellow-400 text-green-800'
                                  : player.rank === 2
                                    ? 'bg-gray-200 text-gray-700'
                                    : 'bg-amber-700/80 text-white'
                              } text-sm font-bold`}
                            >
                              {player.rank}
                            </div>
                            <div>
                              <div className="font-medium">{player.name}</div>
                              <div className="text-xs text-gray-500">
                                {player.country}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{player.rating}</div>
                            <div
                              className={`text-xs ${player.change > 0 ? 'text-green-600' : 'text-red-600'}`}
                            >
                              {player.change > 0
                                ? `+${player.change}`
                                : player.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Tournament */}
                  <div className="border-t pt-4">
                    <h4 className="mb-2 text-sm font-medium text-gray-500">
                      FEATURED TOURNAMENT
                    </h4>
                    <div className="rounded-lg bg-green-50 p-3">
                      <div className="mb-2 flex items-start justify-between">
                        <div className="flex gap-3">
                          <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg text-white">
                            <Trophy className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">
                              Summer Championship 2023
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <CalendarDays className="h-3 w-3" />
                              Aug 15 - Aug 20, 2023
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-yellow-100 text-green-800">
                          64 Players
                        </Badge>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {[...Array(4)].map((_, i) => (
                            <Avatar
                              key={i}
                              className="h-6 w-6 border-2 border-white"
                            >
                              <AvatarFallback className="text-primary bg-green-100">
                                {String.fromCharCode(65 + i)}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs">
                            +60
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:bg-green-50 hover:text-green-700"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Tournament Stats */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-green-50 p-3 text-center">
                      <div className="text-primary text-2xl font-bold">
                        1,200+
                      </div>
                      <div className="text-xs text-gray-500">Tournaments</div>
                    </div>
                    <div className="rounded-lg bg-yellow-50 p-3 text-center">
                      <div className="text-2xl font-bold text-green-800">
                        5,000+
                      </div>
                      <div className="text-xs text-gray-500">Players</div>
                    </div>
                    <div className="rounded-lg bg-green-50 p-3 text-center">
                      <div className="text-primary text-2xl font-bold">
                        120+
                      </div>
                      <div className="text-xs text-gray-500">Countries</div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <Button
                      variant="link"
                      className="text-primary text-sm hover:text-green-700"
                    >
                      View All Rankings and Tournaments
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className=""></main>
    </div>
  );
}

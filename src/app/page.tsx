import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from 'lucide-react';

import Header from '@/components/custom/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Footer from '@/components/custom/footer';

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

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-primary text-3xl font-bold md:text-4xl">
                5,000+
              </div>
              <div className="mt-1 text-sm text-gray-500">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold md:text-4xl">
                1,200+
              </div>
              <div className="mt-1 text-sm text-gray-500">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold md:text-4xl">
                50,000+
              </div>
              <div className="mt-1 text-sm text-gray-500">Matches Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold md:text-4xl">
                120+
              </div>
              <div className="mt-1 text-sm text-gray-500">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Platform Features
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Everything you need to organize tournaments, track ratings, and
              improve your game
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <CardHeader className="pb-2">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                    <Trophy className="text-primary h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    Tournament Management
                  </CardTitle>
                </div>
                <CardDescription>
                  Create and manage tournaments with ease
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Automated match scheduling
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Real-time tournament brackets
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Group stage and knockout formats
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <CardHeader className="pb-2">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                    <TrendingUp className="h-6 w-6 text-green-800" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    Player Ratings
                  </CardTitle>
                </div>
                <CardDescription>
                  Track and improve your performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Accurate ELO-based rating system
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Historical performance tracking
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Regional and global leaderboards
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <CardHeader className="pb-2">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    AI Match Analysis
                  </CardTitle>
                </div>
                <CardDescription>
                  Gain insights to improve your game
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Shot analysis and recommendations
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Movement and positioning feedback
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Personalized training suggestions
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tournaments Section */}
      <section id="tournaments" className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-gray-800">
                Featured Tournaments
              </h2>
              <p className="max-w-[600px] text-gray-600">
                Discover upcoming tournaments from around the world
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4 rounded-full border-gray-300 hover:border-sky-500 hover:text-sky-500 md:mt-0"
            >
              View All Tournaments
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                id: 1,
                name: 'Summer Championship 2023',
                location: 'New York, USA',
                date: 'Aug 15 - Aug 20, 2023',
                description:
                  'The premier squash event of the summer season featuring top players from around the world.',
                players: 64,
                featured: true,
                color: 'bg-sky-500',
              },
              {
                id: 2,
                name: 'European Open',
                location: 'London, UK',
                date: 'Sep 5 - Sep 10, 2023',
                description:
                  "One of Europe's most prestigious squash tournaments with international participation.",
                players: 48,
                featured: true,
                color: 'bg-amber-500',
              },
              {
                id: 3,
                name: 'Asia Pacific Classic',
                location: 'Singapore',
                date: 'Oct 12 - Oct 18, 2023',
                description:
                  'A major tournament in the Asia Pacific region featuring both established and rising stars.',
                players: 32,
                featured: false,
                color: 'bg-blue-500',
              },
            ].map(tournament => (
              <Card
                key={tournament.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div
                        className={`h-12 w-12 rounded-xl ${tournament.color} flex items-center justify-center text-white`}
                      >
                        <Trophy className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-800">
                          {tournament.name}
                        </CardTitle>
                        <CardDescription className="mt-1 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {tournament.location}
                        </CardDescription>
                      </div>
                    </div>
                    {tournament.featured && (
                      <Badge className="rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {tournament.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {tournament.players} Players
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {tournament.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-gray-50 px-6 py-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <Avatar key={i} className="h-6 w-6 border-2 border-white">
                        <AvatarFallback className="bg-sky-100 text-sky-500">
                          {String.fromCharCode(65 + i)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {tournament.players > 4 && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs">
                        +{tournament.players - 4}
                      </div>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sky-500 hover:bg-sky-50 hover:text-sky-600"
                  >
                    Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Player Rankings Section */}
      <section id="rankings" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-gray-800">
                Top Ranked Players
              </h2>
              <p className="max-w-[600px] text-gray-600">
                See how you compare to the best squash players on the platform
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4 rounded-full border-gray-300 hover:border-sky-500 hover:text-sky-500 md:mt-0"
            >
              View Full Rankings
            </Button>
          </div>

          <Card className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-6 py-4 text-left font-medium text-gray-500">
                        Rank
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-gray-500">
                        Player
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-gray-500">
                        Country
                      </th>
                      <th className="px-6 py-4 text-right font-medium text-gray-500">
                        Rating
                      </th>
                      <th className="hidden px-6 py-4 text-right font-medium text-gray-500 md:table-cell">
                        Matches
                      </th>
                      <th className="hidden px-6 py-4 text-right font-medium text-gray-500 md:table-cell">
                        Win Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: 1,
                        name: 'Alex Johnson',
                        country: 'USA',
                        avatar: '/placeholder.svg?height=40&width=40',
                        rating: 1850,
                        change: 25,
                        matches: 48,
                        winRate: 72,
                      },
                      {
                        id: 2,
                        name: 'Sarah Williams',
                        country: 'UK',
                        avatar: '/placeholder.svg?height=40&width=40',
                        rating: 1820,
                        change: 15,
                        matches: 42,
                        winRate: 68,
                      },
                      {
                        id: 3,
                        name: 'Michael Chen',
                        country: 'China',
                        avatar: '/placeholder.svg?height=40&width=40',
                        rating: 1795,
                        change: -10,
                        matches: 36,
                        winRate: 64,
                      },
                      {
                        id: 4,
                        name: 'Emma Rodriguez',
                        country: 'Spain',
                        avatar: '/placeholder.svg?height=40&width=40',
                        rating: 1780,
                        change: 30,
                        matches: 39,
                        winRate: 66,
                      },
                      {
                        id: 5,
                        name: 'James Wilson',
                        country: 'Australia',
                        avatar: '/placeholder.svg?height=40&width=40',
                        rating: 1760,
                        change: -5,
                        matches: 45,
                        winRate: 62,
                      },
                    ].map((player, index) => (
                      <tr key={player.id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{index + 1}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 rounded-full border border-gray-200">
                              <AvatarImage
                                src={player.avatar}
                                alt={player.name}
                              />
                              <AvatarFallback className="bg-sky-100 text-sky-500">
                                {player.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-gray-800">
                              {player.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">{player.country}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span className="font-medium">{player.rating}</span>
                            <Badge
                              variant={
                                player.change > 0 ? 'default' : 'destructive'
                              }
                              className={`h-5 rounded-full px-2 text-xs ${player.change > 0 ? 'bg-green-100 text-green-600' : ''}`}
                            >
                              {player.change > 0 ? '+' : ''}
                              {player.change}
                            </Badge>
                          </div>
                        </td>
                        <td className="hidden px-6 py-4 text-right md:table-cell">
                          {player.matches}
                        </td>
                        <td className="hidden px-6 py-4 text-right md:table-cell">
                          {player.winRate}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Elevate Your Squash Game?
            </h2>
            <p className="mb-8 text-xl text-white/80">
              Join thousands of players and organizers on the leading squash
              platform
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary gap-2 rounded-full bg-white hover:bg-white/90"
              >
                Create Free Account
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

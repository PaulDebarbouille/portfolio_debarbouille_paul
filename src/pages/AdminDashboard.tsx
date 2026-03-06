import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Globe, Clock, Eye, LogOut, RefreshCw } from "lucide-react";

interface Stats {
  totalViews: number;
  uniqueVisitors: number;
  avgDuration: number;
  topPages: { path: string; count: number }[];
  topCountries: { country: string; count: number }[];
  topCities: { city: string; count: number }[];
  recentViews: { page_path: string; country: string; city: string; created_at: string; duration_seconds: number }[];
  viewsByDay: { date: string; count: number }[];
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchStats = async () => {
    setLoading(true);

    const { data: session } = await supabase.auth.getSession();
    if (!session.session) {
      navigate("/admin");
      return;
    }

    const { data: views } = await supabase
      .from("page_views")
      .select("*")
      .order("created_at", { ascending: false });

    if (!views) {
      setLoading(false);
      return;
    }

    const uniqueSessions = new Set(views.map((v) => v.session_id));
    const totalDuration = views.reduce((sum, v) => sum + (v.duration_seconds || 0), 0);
    const avgDuration = views.length > 0 ? Math.round(totalDuration / views.length) : 0;

    // Top pages
    const pageCounts: Record<string, number> = {};
    views.forEach((v) => {
      pageCounts[v.page_path] = (pageCounts[v.page_path] || 0) + 1;
    });
    const topPages = Object.entries(pageCounts)
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Top countries
    const countryCounts: Record<string, number> = {};
    views.forEach((v) => {
      const c = v.country || "Unknown";
      countryCounts[c] = (countryCounts[c] || 0) + 1;
    });
    const topCountries = Object.entries(countryCounts)
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Top cities
    const cityCounts: Record<string, number> = {};
    views.forEach((v) => {
      const c = v.city || "Unknown";
      cityCounts[c] = (cityCounts[c] || 0) + 1;
    });
    const topCities = Object.entries(cityCounts)
      .map(([city, count]) => ({ city, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Views by day (last 30 days)
    const dayMap: Record<string, number> = {};
    views.forEach((v) => {
      const day = new Date(v.created_at).toISOString().split("T")[0];
      dayMap[day] = (dayMap[day] || 0) + 1;
    });
    const viewsByDay = Object.entries(dayMap)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-30);

    setStats({
      totalViews: views.length,
      uniqueVisitors: uniqueSessions.size,
      avgDuration,
      topPages,
      topCountries,
      topCities,
      recentViews: views.slice(0, 20).map((v) => ({
        page_path: v.page_path,
        country: v.country || "Unknown",
        city: v.city || "Unknown",
        created_at: v.created_at,
        duration_seconds: v.duration_seconds || 0,
      })),
      viewsByDay,
    });

    setLoading(false);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center aws-gradient">
        <div className="text-primary-foreground text-lg animate-pulse">Chargement des statistiques...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Portfolio
            </Button>
            <h1 className="text-lg font-bold">📊 Analytics Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchStats}>
              <RefreshCw className="h-4 w-4 mr-1" />
              Rafraîchir
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-1" />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <Eye className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-3xl font-bold">{stats?.totalViews || 0}</p>
              <p className="text-sm text-muted-foreground">Vues totales</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-3xl font-bold">{stats?.uniqueVisitors || 0}</p>
              <p className="text-sm text-muted-foreground">Visiteurs uniques</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-3xl font-bold">{stats?.topCountries.length || 0}</p>
              <p className="text-sm text-muted-foreground">Pays</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-3xl font-bold">{formatDuration(stats?.avgDuration || 0)}</p>
              <p className="text-sm text-muted-foreground">Durée moyenne</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Views by Day */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">📈 Vues par jour</CardTitle>
            </CardHeader>
            <CardContent>
              {stats?.viewsByDay.length ? (
                <div className="space-y-1">
                  {stats.viewsByDay.map((d) => (
                    <div key={d.date} className="flex items-center gap-2 text-sm">
                      <span className="w-24 text-muted-foreground">{d.date}</span>
                      <div
                        className="h-5 rounded bg-accent/80"
                        style={{
                          width: `${Math.max(8, (d.count / Math.max(...stats.viewsByDay.map((x) => x.count))) * 100)}%`,
                        }}
                      />
                      <span className="font-medium">{d.count}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">Aucune donnée</p>
              )}
            </CardContent>
          </Card>

          {/* Top Countries */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">🌍 Top Pays</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {stats?.topCountries.map((c) => (
                  <div key={c.country} className="flex justify-between items-center text-sm">
                    <span>{c.country}</span>
                    <span className="font-medium text-accent">{c.count} vues</span>
                  </div>
                ))}
                {!stats?.topCountries.length && (
                  <p className="text-muted-foreground text-sm">Aucune donnée</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">📄 Pages les plus visitées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {stats?.topPages.map((p) => (
                  <div key={p.path} className="flex justify-between items-center text-sm">
                    <span className="font-mono text-xs">{p.path}</span>
                    <span className="font-medium text-accent">{p.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Cities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">🏙️ Top Villes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {stats?.topCities.map((c) => (
                  <div key={c.city} className="flex justify-between items-center text-sm">
                    <span>{c.city}</span>
                    <span className="font-medium text-accent">{c.count} vues</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Views */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">🕐 Visites récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="text-left py-2 pr-4">Date</th>
                    <th className="text-left py-2 pr-4">Page</th>
                    <th className="text-left py-2 pr-4">Pays</th>
                    <th className="text-left py-2 pr-4">Ville</th>
                    <th className="text-left py-2">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  {stats?.recentViews.map((v, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-2 pr-4 text-muted-foreground">
                        {new Date(v.created_at).toLocaleString("fr-FR")}
                      </td>
                      <td className="py-2 pr-4 font-mono text-xs">{v.page_path}</td>
                      <td className="py-2 pr-4">{v.country}</td>
                      <td className="py-2 pr-4">{v.city}</td>
                      <td className="py-2">{formatDuration(v.duration_seconds)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;

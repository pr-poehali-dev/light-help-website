import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const specialists = [
    {
      name: 'Андрей Ештокин',
      specialty: 'Семейный психолог',
      experience: '15 лет',
      description: 'Работа с семейными конфликтами, детско-родительские отношения'
    },
    {
      name: 'Дмитрий Соколов',
      specialty: 'Клинический психолог',
      experience: '8 лет',
      description: 'Депрессия, тревожные расстройства, психосоматика'
    },
    {
      name: 'Елена Морозова',
      specialty: 'Психолог-консультант',
      experience: '1 год',
      description: 'Личностный рост, самооценка, карьерное консультирование'
    }
  ];

  const services = [
    {
      icon: 'Users',
      title: 'Семейная терапия',
      description: 'Решение семейных конфликтов, улучшение взаимопонимания между партнерами'
    },
    {
      icon: 'User',
      title: 'Индивидуальные консультации',
      description: 'Работа с тревогой, депрессией, самооценкой и личностными кризисами'
    },
    {
      icon: 'Heart',
      title: 'Детская психология',
      description: 'Помощь детям и подросткам в преодолении трудностей развития'
    },
    {
      icon: 'Brain',
      title: 'Психосоматика',
      description: 'Работа с телесными проявлениями психологических проблем'
    }
  ];

  const reviews = [
    {
      name: 'Мария К.',
      text: 'Благодаря работе с психологом я смогла наладить отношения с мужем. Атмосфера в центре очень теплая и располагающая.',
      rating: 5
    },
    {
      name: 'Алексей В.',
      text: 'Долго не мог решиться на визит к психологу. Здесь меня выслушали без осуждения и помогли разобраться в себе.',
      rating: 5
    },
    {
      name: 'Ольга С.',
      text: 'Профессиональный подход, внимательное отношение. Рекомендую центр "Луч света" всем, кто ищет поддержку.',
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: 'Как проходит первая консультация?',
      answer: 'Первая встреча длится 50-60 минут. Психолог познакомится с вами, выслушает вашу ситуацию и предложит план работы. Вы сможете задать все интересующие вопросы.'
    },
    {
      question: 'Сколько сеансов потребуется?',
      answer: 'Количество встреч индивидуально. Некоторым достаточно 3-5 консультаций, другим требуется долгосрочная терапия. После первой встречи психолог даст примерный прогноз.'
    },
    {
      question: 'Гарантируется ли конфиденциальность?',
      answer: 'Абсолютно. Всё, что вы говорите на сеансе, остается между вами и психологом. Это профессиональная этика, которой мы строго придерживаемся.'
    },
    {
      question: 'Можно ли пройти консультацию онлайн?',
      answer: 'Да, мы проводим сеансы как очно, так и онлайн через безопасные видеоплатформы. Эффективность онлайн-консультаций не уступает очным встречам.'
    },
    {
      question: 'Какова стоимость консультации?',
      answer: 'Стоимость индивидуальной консультации — от 3000 рублей за 60 минут. Семейные консультации — от 4000 рублей. Возможна оплата курса со скидкой.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Sun" className="text-primary" size={28} />
              <span className="text-2xl font-bold text-primary">Луч света</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О центре</a>
              <a href="#specialists" className="text-foreground hover:text-primary transition-colors">Специалисты</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button asChild>
              <a href="#appointment">Записаться</a>
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/4c496e59-eb96-4a62-a32a-749f2f3db2fb/files/af9d9e24-be82-4792-8f1f-9344769664f3.jpg" 
            alt="Фон"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Психологическая помощь<br />с заботой о вас
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная поддержка в трудные моменты жизни. Мы поможем найти внутренние ресурсы и обрести гармонию.
            </p>
            <Button size="lg" asChild className="text-lg px-8">
              <a href="#appointment">Записаться на консультацию</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">О нашем центре</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/4c496e59-eb96-4a62-a32a-749f2f3db2fb/files/24913a97-858a-431e-a5c2-0bb51222742c.jpg" 
                  alt="Психологический центр Луч света"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Луч света" — это психологический центр, где каждый может получить профессиональную поддержку в безопасной и доброжелательной атмосфере.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы верим, что каждый человек обладает внутренними ресурсами для преодоления трудностей. Наша задача — помочь вам обнаружить эти ресурсы и научиться использовать их.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">специалистов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specialists" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">Наши специалисты</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Опытные психологи с профильным образованием и регулярной супервизией
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <Card key={index} className="animate-scale-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-primary" />
                  </div>
                  <CardTitle className="text-center">{specialist.name}</CardTitle>
                  <CardDescription className="text-center">{specialist.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm font-medium text-primary">Опыт работы: {specialist.experience}</p>
                  <p className="text-sm text-muted-foreground">{specialist.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Комплексная психологическая помощь для детей и взрослых
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="animate-scale-in hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <Icon name={service.icon} size={28} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Отзывы наших клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-scale-in">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="appointment" className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">Записаться на консультацию</h2>
          <p className="text-center text-muted-foreground mb-8 animate-fade-in">
            Заполните форму, и мы свяжемся с вами для уточнения времени встречи
          </p>
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Как к вам обращаться?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий (необязательно)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите кратко, с чем хотели бы поработать"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center animate-scale-in">
              <CardHeader>
                <Icon name="MapPin" size={40} className="text-primary mx-auto mb-2" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Орёл, ул. Маринченко, д. 25</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in">
              <CardHeader>
                <Icon name="Phone" size={40} className="text-primary mx-auto mb-2" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in">
              <CardHeader>
                <Icon name="Mail" size={40} className="text-primary mx-auto mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@luchsveta.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2025 Психологический центр "Луч света". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
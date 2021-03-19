<template>
    <div class="results m-2">
        <div class="flex justify-between items-center px-8 my-8">
            <div>
                <img src="../assets/i_test_logo.png" class="" alt="" style="width: 169px; height: 62px;">
            </div>
            <div class="font-bold">
                Назад
            </div>
        </div>
        <div class="results text-2xl font-bold lg:mx-8 md:mx-8 sm:mx-0 lg:mt-36 md:mt-28 mt-12 space-y-12">
            <div class="card bg-white shadow-lg">
                <div class="cardHeader bg-yellow-400 font-bold px-4 py-2 rounded-t-lg">
                    Результаты тестирования - Касымхан Али (23 года)
                </div>
                <div class="cardContent font-medium p-4">

                </div>
            </div>

            <div class="card bg-white shadow-lg">
                <div class="cardHeader bg-yellow-400 font-bold px-4 py-2 rounded-t-lg">
                    Информация о заполнении
                </div>
                <div class="cardContent font-medium p-6">
                    <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
                        <div>
                            Ответов "Может быть": 12
                        </div>
                        <div>
                            Время выполнения: 00:58:52
                        </div>
                    </div>
                </div>
            </div>

            <div class="card bg-white shadow-lg rounded-lg">
                <div class="cardHeader bg-yellow-400 font-bold px-4 py-2 rounded-t-lg">
                    {{ shortDescription.baseTitle }}
                </div>
                <div class="cardContent font-medium p-6">
                    <div class="grid grid-flow-col-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-8">
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ shortDescription.cardTitle__1.title }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                <div class="flex items-center justify-center m-4">
                                    <img src="../assets/halfDonut.png" alt="">
                                </div>
                                <div>
                                    {{ shortDescription.cardTitle__2.description }}
                                </div>
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ shortDescription.cardTitle__2.title }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                <div class="flex items-center justify-center m-4">
                                    <img src="../assets/newImg.png" alt="">
                                </div>
                                <div>
                                    {{ shortDescription.cardTitle__2.description }}
                                </div>
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ shortDescription.cardTitle__3.title }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                <div class="flex items-center justify-center m-4">
                                    <img src="../assets/pinkGlasses.png" alt="">
                                </div>
                                <div>
                                    {{ shortDescription.cardTitle__3.description }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Explanation of results-->
            <div class="card bg-white shadow-lg rounded-lg">
                <div class="cardHeader bg-yellow-400 font-bold px-4 py-2 rounded-t-lg">
                    {{ explanationOFResults.baseTitle }}
                </div>
                <div class="cardContent font-medium p-6">
                    <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-8">
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.attention.cardAttention.title }} - {{ levels.middle }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.attention.cardAttention.contentMiddle }}
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.positivity.baseTitle }} - {{ levels.middle }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.positivity.cardPositivity.contentMiddle }}
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.selfControl.baseTitle }} - {{ levels.high }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.selfControl.cardSelfControl.contentHigh }}
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.confidence.baseTitle }} - {{ levels.high }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.confidence.cardConfidence.contentHigh }}
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.activity.baseTitle }} - {{ levels.veryHigh }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.activity.cardActivity.contentVeryHigh }}
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.persistence.baseTitle }} - {{ levels.veryHigh }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.persistence.cardPersistence.contentVeryHigh }}
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.responsibility.baseTitle }} - {{ levels.high }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.responsibility.cardResponsibility.contentHigh }}
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.objectivity.baseTitle }} - {{ levels.middle }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.responsibility.cardResponsibility.contentHigh }}
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.sensitivity.baseTitle }} - {{ levels.high }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.sensitivity.cardSensitivity.contentHigh }}
                            </div>
                        </div>
                        <div class="card bg-white shadow-lg rounded-lg">
                            <div class="cardHeader bg-yellow-400 font-medium px-4 py-2 rounded-t-lg">
                                {{ explanationOFResults.sociability.baseTitle }} - {{ levels.high }}
                            </div>
                            <div class="cardContent font-medium p-6">
                                {{ explanationOFResults.sociability.cardSociability.contentHigh }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-24 py-8 text-center">
                <a href="../assets/i_test_logo.png" class="font-bold" download="">
                    Скачать PDF
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'results',
        data() {
            return {
                levels: {
                    veryLow: `Очень Низкая`,
                    low: `Низкая`,
                    middle: `Средняя`,
                    high: `Высокая`,
                    veryHigh: `Очень высокая`
                },
                shortDescription: {
                    baseTitle: 'Синдромы',
                    cardTitle__1: {
                        title: 'Инициативный',
                        description: 'Человек по настоящему активен и инициативен в жизни и работе.'
                    },
                    cardTitle__2: {
                        title: 'Любит новое',
                        description: 'Человек любит делать новые вещи и может начать скучать, если нового в его работе недостаточно.',
                    },
                    cardTitle__3: {
                        title: `Розовые очки`,
                        description: `Человек имеет наивное искаженное восприятие объективной реальности и зачастую
                                      не замечает негативных факторов своей деятельности.`,
                    },
                },
                explanationOFResults: {
                    baseTitle: `Обяъснение результатов`,
                    attention: {
                        cardAttention: {
                            title: 'Внимательность',
                            /*contentLow: ``,*/
                            contentMiddle: `Человек способен концентрировать свое внимание на текущих делах, планировать
                                                и организовывать что-либо в настоящем времени. Способен соблюдать порядок,
                                                хотя это не всегда получается. Мнение может зависеть от эмоций и желания
                                                окружающих, не всегда угадывает ожидания и правильные ответы.`,
                            /*contentHigh: ``,*/
                        }
                    },
                    positivity: {
                        baseTitle: 'Позитивность',
                        cardPositivity: {
                            /*title: ``,*/
                            /*contentLow: ``,*/
                            contentMiddle: `В основном позитивный и счастливый человек, но проблемы и трудности
                                                жизни иногда выбивают из равновесия, и не всегда бывает легко
                                                восстановить уравновешенное состояние. Хорошее настроение может
                                                зависеть от других людей и обстоятельств. В основном честен
                                                 в делах, способен находить решения. Не всегда выигрывает в жизни.`,
                            /*contentHigh: ``,*/
                        },
                    },
                    selfControl: {
                      baseTitle: 'Самообладание',
                        cardSelfControl: {
                          /*title: '',*/
                            contentLow: ``,
                            contentMiddle: ``,
                            contentHigh: `Спокойный, невозмутимый, уравновешенный человек. Хорошо владеет своими
                                            эмоциями и управляет телом, мимикой, жестами. Легко держит себя в руках
                                             и сохраняет эффективность, независимо от любых происшествий.
                                              Обладает ровным темпераментом и имеет хорошее терпение.`,
                        }
                    },
                    confidence: {
                        baseTitle: `Уверенность`,
                        cardConfidence: {
                            /*contentLow: ``,*/
                            /*contentMiddle: ``,*/
                            contentHigh: `Уверенный в себе человек, который хорошо знает себя, свои сильные стороны,
                                            что может и чего не может, свои цели и амбиции в жизни. Реалистическое
                                            отношение к себе не дает совершать больших ошибок. Надежен в делах,
                                             предсказуем. Хорошо справляется с рутиной, не делает много изменений,
                                              не любит рисковать.`,
                        },
                    },
                    activity: {
                        baseTitle: `Активность`,
                        cardActivity: {
                            contentLow: ``,
                            contentMiddle: ``,
                            contentHigh: ``,
                            contentVeryHigh: `Очень активный и энергичный человек. Любит движение и работу.
                                                Легко начинает новые дела и проекты. Имеет большой запас
                                                жизненных сил и выносливости. Часто получает хорошие результаты.
                                                Обладает энергией для завершения любого дела. Имеет большой интерес
                                                 к новым областям и незнакомому. Не может сидеть на месте и начинает
                                                 скучать, если в работе нет нового.`,
                        },
                    },
                    persistence: {
                        baseTitle: `Настойчивость`,
                        cardPersistence: {
                            contentLow: ``,
                            contentMiddle: ``,
                            contentHigh: ``,
                            contentVeryHigh: `Человек легко справляется с выполнением того, что поставил перед собой
                                                в делах и в жизни. Прямой и целеустремленный в отношениях с людьми.
                                                 Способен контролировать людей, доводить дела до конца. Ориентирован
                                                 на результат. Иногда применяет большую силу, чем требуется. Порой
                                                  старается дойти до цели любой ценой, даже если цель уже не актуальна
                                                  или это может привести к непредсказуемым затратам.`,
                        },
                    },
                    responsibility: {
                        baseTitle: `Ответственность`,
                        cardResponsibility: {
                            contentLow: ``,
                            contentMiddle: ``,
                            contentHigh: `Ответственный человек, способный взять на себя что-либо и быть уверенным
                                             в удаче или провале дела. Он способен встретить ситуацию лицом к лицу
                                              и решить ее наилучшим образом, вместо того, чтобы считать, что это
                                               обязанности других. Может справляться с давлением, принять и уладить критику.`,
                            contentVeryHigh: ``,
                        }
                    },
                    objectivity: {
                        baseTitle: `Объективность`,
                        cardObjectivity: {
                            contentLow: ``,
                            contentMiddle: `Склонен к критике и не всегда справедлив в оценке людей и событий. Может
                                            воспринимать небольшие недостатки слишком сильно, и это часто не
                                            позволяет правильно оценивать положение дел. Иногда бывает не
                                            совсем дипломатичен. Может концентрироваться на недостатках.`,
                            contentHigh: ``,
                            contentVeryHigh: ``,
                        }
                    },
                    sensitivity: {
                        baseTitle: `Чуткость`,
                        cardSensitivity: {
                            contentLow: ``,
                            contentMiddle: ``,
                            contentHigh: `Душевный и симпатизирующий человек, ориентированный на помощь другим.
                                        Легко создает близкие отношения, чувствует других людей
                                        и уважает их точку зрения. Открыто выражает благодарность.`,
                            contentVeryHigh: ``,
                        }
                    },
                    sociability: {
                        baseTitle: `Общительность`,
                        cardSociability: {
                            contentLow: ``,
                            contentMiddle: ``,
                            contentHigh: `Общительный, яркий человек, который получает удовольствие, разговаривая
                                         с людьми.Легко начинает общение и устанавливает контакт с людьми.
                                          Любит быть в центре внимания, продвигает себя. Понятно и лаконично выражает мысли.`,
                            contentVeryHigh: ``,
                        }
                    },
                }
            }
        }
    }
</script>
